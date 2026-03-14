import { PartialType } from '@nestjs/mapped-types';
import { CreateProyectoDto } from './create-proyecto.dto';
import { IsOptional, IsString, MinLength, IsIn, IsInt, Min } from 'class-validator';

export class UpdateProyectoDto extends PartialType(CreateProyectoDto) {
  @IsOptional()
  @IsString({ message: 'El nombre del proyecto debe ser texto' })
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  nombre_proyecto?: string;

  @IsOptional()
  @IsString({ message: 'La descripción debe ser texto' })
  descripcion?: string;

  @IsOptional()
  @IsString({ message: 'El estado debe ser texto' })
  @IsIn(['activo', 'completo', 'archivado'], { 
    message: 'El estado del proyecto debe ser: activo, completo o archivado' 
  })
  estado?: string;

  @IsOptional()
  @IsInt({ message: 'El ID del usuario debe ser un número entero' })
  @Min(1, { message: 'ID de usuario inválido' })
  id_usuario?: number;
}
