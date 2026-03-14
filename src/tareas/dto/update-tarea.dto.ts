import { PartialType } from '@nestjs/mapped-types';
import { CreateTareaDto } from './create-tarea.dto';
import { IsOptional, IsString, MinLength, IsIn, IsInt, Min } from 'class-validator';

export class UpdateTareaDto extends PartialType(CreateTareaDto) {
  @IsOptional()
  @IsString({ message: 'El título debe ser texto' })
  @MinLength(3, { message: 'El título debe tener al menos 3 caracteres' })
  titulo?: string;

  @IsOptional()
  @IsString({ message: 'La descripción debe ser texto' })
  descripcion?: string;

  @IsOptional()
  @IsString({ message: 'El estado debe ser texto' })
  @IsIn(['pendiente', 'en_progreso', 'completo'], { 
    message: 'El estado debe ser: pendiente, en_progreso o completada' 
  })
  estado?: string;

  @IsOptional()
  @IsString({ message: 'La prioridad debe ser texto' })
  @IsIn(['baja', 'media', 'alta', 'urgente'], { 
    message: 'La prioridad debe ser: baja, media, alta o urgente' 
  })
  prioridad?: string;

  @IsOptional()
  @IsInt({ message: 'El ID del proyecto debe ser un número entero' })
  @Min(1, { message: 'ID de proyecto inválido' })
  id_proyecto?: number;

  @IsOptional()
  @IsInt({ message: 'El ID del usuario debe ser un número entero' })
  @Min(1, { message: 'ID de usuario inválido' })
  id_usuario?: number;
}