import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/modules/usuario/usuario.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginUserInput } from './dto/login-user.input';
import { CreateUsuarioInput } from 'src/modules/usuario/dto/create-usuario.input';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usuarioService.findUsuarioByEmail(username);
    if (user) {
      const valid = await bcrypt.compare(password, user.senha);
      if (valid) {
        const { senha, ...result } = user;
        return result;
      }
    }
    return null;
  }

  async login(request: any) {
    const user = await this.usuarioService.findUsuarioByEmail(
      request.body.username,
    );
    return {
      accessToken: this.jwtService.sign({
        username: user.email,
        sub: user.id,
      }),
      user,
    };
  }

  async signup(loginUserInput: LoginUserInput) {
    const user = await this.usuarioService.findUsuarioByEmail(
      loginUserInput.username,
    );
    if (user) {
      throw new Error('User already exists!');
    }
    const newUser: CreateUsuarioInput = new CreateUsuarioInput();
    newUser.email = loginUserInput.username;
    newUser.senha = await bcrypt.hash(loginUserInput.password, 10);
    return this.usuarioService.create(newUser);
  }
}
