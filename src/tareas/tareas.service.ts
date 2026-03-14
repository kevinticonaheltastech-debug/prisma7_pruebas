import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';

@Injectable()
export class TareasService {
  constructor(private prisma: PrismaService) {}

  async create(createTareaDto: CreateTareaDto) {
    // Verificar que el proyecto existe
    const proyecto = await this.prisma.proyectos.findUnique({
      where: { id_proyecto: createTareaDto.id_proyecto },
    });

    if (!proyecto) {
      throw new NotFoundException(`Proyecto con ID ${createTareaDto.id_proyecto} no encontrado`);
    }

    // Verificar que el usuario existe
    const usuario = await this.prisma.usuarios.findUnique({
      where: { id_usuario: createTareaDto.id_usuario },
    });

    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${createTareaDto.id_usuario} no encontrado`);
    }

    return this.prisma.tareas.create({
      data: createTareaDto,
      include: {
        proyecto: true,
        usuario: true,
      },
    });
  }

  async findAll() {
    return this.prisma.tareas.findMany({
      include: {
        proyecto: true,
        usuario: true,
      },
      orderBy: {
        id_tarea: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const tarea = await this.prisma.tareas.findUnique({
      where: { id_tarea: id },
      include: {
        proyecto: {
          include: {
            usuario: true, // Dueño del proyecto
          },
        },
        usuario: true,     // Usuario asignado
      },
    });

    if (!tarea) {
      throw new NotFoundException(`Tarea con ID ${id} no encontrada`);
    }

    return tarea;
  }

  async update(id: number, updateTareaDto: UpdateTareaDto) {
    await this.findOne(id); // Verifica que existe

    // Si cambia el proyecto, verificar que existe
    if (updateTareaDto.id_proyecto) {
      const proyecto = await this.prisma.proyectos.findUnique({
        where: { id_proyecto: updateTareaDto.id_proyecto },
      });
      if (!proyecto) {
        throw new NotFoundException(`Proyecto con ID ${updateTareaDto.id_proyecto} no encontrado`);
      }
    }

    // Si cambia el usuario, verificar que existe
    if (updateTareaDto.id_usuario) {
      const usuario = await this.prisma.usuarios.findUnique({
        where: { id_usuario: updateTareaDto.id_usuario },
      });
      if (!usuario) {
        throw new NotFoundException(`Usuario con ID ${updateTareaDto.id_usuario} no encontrado`);
      }
    }

    return this.prisma.tareas.update({
      where: { id_tarea: id },
      data: updateTareaDto,
      include: {
        proyecto: true,
        usuario: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id); // Verifica que existe

    return this.prisma.tareas.delete({
      where: { id_tarea: id },
    });
  }

  // Métodos adicionales útiles

  async findByProyecto(id_proyecto: number) {
    return this.prisma.tareas.findMany({
      where: { id_proyecto },
      include: {
        usuario: true,
      },
      orderBy: {
        prioridad: 'desc', // Tareas de mayor prioridad primero
      },
    });
  }

  async findByUsuario(id_usuario: number) {
    return this.prisma.tareas.findMany({
      where: { id_usuario },
      include: {
        proyecto: true,
      },
      orderBy: {
        estado: 'asc',
      },
    });
  }

  async findByEstado(estado: string) {
    return this.prisma.tareas.findMany({
      where: { estado },
      include: {
        proyecto: true,
        usuario: true,
      },
    });
  }

  async findByPrioridad(prioridad: string) {
    return this.prisma.tareas.findMany({
      where: { prioridad },
      include: {
        proyecto: true,
        usuario: true,
      },
    });
  }
}
