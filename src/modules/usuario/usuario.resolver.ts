import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsuarioService } from './usuario.service';
import { Usuario } from './entities/usuario.entity';
import { UpdateUsuarioInput } from './dto/update-usuario.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Resolver(() => Usuario)
export class UsuarioResolver {
  constructor(private readonly usuarioService: UsuarioService) {}

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
  @UseGuards(JwtAuthGuard)
  updateUsuario(
    @Args('updateUsuarioInput') updateUsuarioInput: UpdateUsuarioInput,
  ) {
    return this.usuarioService.update(
      updateUsuarioInput.id,
      updateUsuarioInput,
    );
  }

  @Mutation(() => Usuario)
  @UseGuards(JwtAuthGuard)
  removeUsuario(@Args('id', { type: () => Int }) id: number) {
    return this.usuarioService.remove(id);
  }
}
