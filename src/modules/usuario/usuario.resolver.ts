import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsuarioService } from './usuario.service';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Resolver(() => Usuario)
export class UsuarioResolver {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Mutation(() => Usuario)
  createUsuario(
    @Args('createUsuarioInput') createUsuarioInput: CreateUsuarioInput,
  ) {
    return this.usuarioService.create(createUsuarioInput);
  }

  @Query(() => [Usuario], { name: 'usuarios' })
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.usuarioService.findAll();
  }

  @Query(() => Usuario, { name: 'usuario' })
  @UseGuards(JwtAuthGuard)
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usuarioService.findOne(id);
  }

  @Mutation(() => Usuario)
  updateUsuario(
    @Args('updateUsuarioInput') updateUsuarioInput: UpdateUsuarioInput,
  ) {
    return this.usuarioService.update(
      updateUsuarioInput.id,
      updateUsuarioInput,
    );
  }

  @Mutation(() => Usuario)
  removeUsuario(@Args('id', { type: () => Int }) id: number) {
    return this.usuarioService.remove(id);
  }
}
