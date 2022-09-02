import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioResolver } from './usuario.resolver';
import { UsuarioRepository } from './usuario.repository';
import { DBPrismaService } from 'src/infrastructure/db-infrastructure';

@Module({
  providers: [
    UsuarioResolver,
    UsuarioService,
    UsuarioRepository,
    DBPrismaService,
  ],
  exports: [UsuarioService, UsuarioRepository, DBPrismaService],
})
export class UsuarioModule {}
