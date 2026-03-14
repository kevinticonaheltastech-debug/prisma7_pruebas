// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  /**
   * Crear un nuevo usuario
   */
  async create(createUserDto: CreateUserDto) {
    // Mapea los campos del DTO al modelo de Prisma
    const userData = {
      nombre: createUserDto.name,
      email: createUserDto.email,
      age: createUserDto.age,
      // esActivo tiene valor por defecto true en Prisma
    };

    return this.prisma.user.create({
      data: userData,
    });
  }

  /**
   * Obtener todos los usuarios
   */
  async findAll() {
    return this.prisma.user.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  /**
   * Buscar un usuario por su ID
   */
  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    return user;
  }

  /**
   * Buscar un usuario por email
   */
  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  /**
   * Actualizar un usuario existente
   */
  async update(id: number, updateUserDto: UpdateUserDto) {
    // Verificar que el usuario existe
    await this.findOne(id);

    // Construir objeto solo con los campos que vienen en el DTO
    const userData: any = {};
    
    if (updateUserDto.name !== undefined) {
      userData.nombre = updateUserDto.name;
    }
    
    if (updateUserDto.email !== undefined) {
      userData.email = updateUserDto.email;
    }
    
    if (updateUserDto.age !== undefined) {
      userData.age = updateUserDto.age;
    }

    return this.prisma.user.update({
      where: { id },
      data: userData,
    });
  }

  /**
   * Eliminar un usuario
   */
  async remove(id: number) {
    // Verificar que el usuario existe
    await this.findOne(id);

    return this.prisma.user.delete({
      where: { id },
    });
  }

  /**
   * Activar/Desactivar usuario
   */
  async toggleActive(id: number) {
    const user = await this.findOne(id);
    
    return this.prisma.user.update({
      where: { id },
      data: {
        esActivo: !user.esActivo,
      },
    });
  }

  /**
   * Obtener solo usuarios activos
   */
  async findActive() {
    return this.prisma.user.findMany({
      where: {
        esActivo: true,
      },
    });
  }
}