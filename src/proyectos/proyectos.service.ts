import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';

@Injectable()
export class ProyectosService {
  constructor(private prisma: PrismaService) {}

  async create(createProyectoDto: CreateProyectoDto) {
    // Verificar que el usuario existe
    const usuario = await this.prisma.usuarios.findUnique({
      where: { id_usuario: createProyectoDto.id_usuario },
    });

    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${createProyectoDto.id_usuario} no encontrado`);
    }

    return this.prisma.proyectos.create({
      data: createProyectoDto,
      include: {
        usuario: true,  // Incluye datos del dueño
      },
    });
  }

  async findAll() {
    return this.prisma.proyectos.findMany({
      include: {
        usuario: true,
        tareas: true,
      },
    });
  }

  async findOne(id: number) {
    const proyecto = await this.prisma.proyectos.findUnique({
      where: { id_proyecto: id },
      include: {
        usuario: true,
        tareas: {
          include: {
            usuario: true,  // Incluye usuario asignado a cada tarea
          },
        },
      },
    });

    if (!proyecto) {
      throw new NotFoundException(`Proyecto con ID ${id} no encontrado`);
    }

    return proyecto;
  }

  async update(id: number, updateProyectoDto: UpdateProyectoDto) {
    await this.findOne(id); // Verifica que existe

    // Si está cambiando el usuario, verificar que existe
    if (updateProyectoDto.id_usuario) {
      const usuario = await this.prisma.usuarios.findUnique({
        where: { id_usuario: updateProyectoDto.id_usuario },
      });
      if (!usuario) {
        throw new NotFoundException(`Usuario con ID ${updateProyectoDto.id_usuario} no encontrado`);
      }
    }

    return this.prisma.proyectos.update({
      where: { id_proyecto: id },
      data: updateProyectoDto,
      include: {
        usuario: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id); // Verifica que existe

    // Primero eliminar las tareas del proyecto (por la FK)
    await this.prisma.tareas.deleteMany({
      where: { id_proyecto: id },
    });

    return this.prisma.proyectos.delete({
      where: { id_proyecto: id },
    });
  }

  // Métodos adicionales útiles
  async findTareas(id: number) {
    const proyecto = await this.findOne(id);
    return this.prisma.tareas.findMany({
      where: { id_proyecto: id },
      include: {
        usuario: true,
      },
    });
  }

  async findByUsuario(id_usuario: number) {
    return this.prisma.proyectos.findMany({
      where: { id_usuario },
      include: {
        tareas: true,
      },
    });
  }
}
