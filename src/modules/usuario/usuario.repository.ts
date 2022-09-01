import { Injectable } from '@nestjs/common';
import { DBPrismaService } from 'src/infrastructure/db-infrastructure';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioRepository {
  constructor(private readonly dbService: DBPrismaService) {}

  async findAll(): Promise<Usuario[]> {
    try {
      return await this.dbService.usuario.findMany();
    } finally {
      this.dbService.$disconnect();
    }
  }

  async findOne(id: number): Promise<Usuario> {
    try {
      return await this.dbService.usuario.findUnique({
        where: { id },
      });
    } finally {
      this.dbService.$disconnect();
    }
  }

  async findUsuarioByEmail(email: string): Promise<Usuario> {
    try {
      return await this.dbService.usuario.findFirst({
        where: { email },
      });
    } finally {
      this.dbService.$disconnect();
    }
  }

  async create(dto: CreateUsuarioInput): Promise<Usuario> {
    try {
      return await this.dbService.usuario.create({
        data: dto,
      });
    } finally {
      this.dbService.$disconnect();
    }
  }

  async update(id: number, dto: UpdateUsuarioInput): Promise<Usuario> {
    try {
      return await this.dbService.usuario.update({
        data: dto,
        where: { id },
      });
    } finally {
      this.dbService.$disconnect();
    }
  }

  async remove(id: number): Promise<Usuario> {
    try {
      return await this.dbService.usuario.delete({
        where: { id },
      });
    } finally {
      this.dbService.$disconnect();
    }
  }
}
