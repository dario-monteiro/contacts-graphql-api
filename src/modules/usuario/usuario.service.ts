import { Injectable } from '@nestjs/common';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';
import { UsuarioRepository } from './usuario.repository';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsuarioService {
  constructor(private readonly repository: UsuarioRepository) {}

  async create(createUsuarioInput: CreateUsuarioInput) {
    createUsuarioInput.senha = await bcrypt.hash(createUsuarioInput.senha, 10);
    return await this.repository.create(createUsuarioInput);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  async findUsuarioByEmail(email: string) {
    return await this.repository.findUsuarioByEmail(email);
  }

  async update(id: number, updateUsuarioInput: UpdateUsuarioInput) {
    updateUsuarioInput.senha = await bcrypt.hash(updateUsuarioInput.senha, 10);
    return await this.repository.update(id, updateUsuarioInput);
  }

  async remove(id: number) {
    return await this.repository.remove(id);
  }
}
