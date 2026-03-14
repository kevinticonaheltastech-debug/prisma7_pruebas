import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    return this.prisma.usuarios.create({
      data: createUsuarioDto,
    });
  }

  async findAll() {
    return this.prisma.usuarios.findMany({
      include: {
        proyectos: true,  // Incluye los proyectos del usuario
        tareas: true,     // Incluye las tareas asignadas
      },
    });
  }

  async findOne(id: number) {
    const usuario = await this.prisma.usuarios.findUnique({
      where: { id_usuario: id },
      include: {
        proyectos: true,
        tareas: true,
      },
    });

    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    return usuario;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    await this.findOne(id); // Verifica que existe

    return this.prisma.usuarios.update({
      where: { id_usuario: id },
      data: updateUsuarioDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id); // Verifica que existe

    return this.prisma.usuarios.delete({
      where: { id_usuario: id },
    });
  }

  // Métodos adicionales útiles
  async findByEmail(email: string) {
    return this.prisma.usuarios.findUnique({
      where: { email },
    });
  }

  async findProyectos(id: number) {
    const usuario = await this.findOne(id);
    return this.prisma.proyectos.findMany({
      where: { id_usuario: id },
    });
  }

  async findTareas(id: number) {
    await this.findOne(id);
    return this.prisma.tareas.findMany({
      where: { id_usuario: id },
    });
  }
}
