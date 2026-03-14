import { IsString, MinLength, MaxLength, IsOptional, IsIn, IsInt, Min } from 'class-validator';

export class CreateProyectoDto {
  @IsString({ message: 'El nombre del proyecto debe ser texto' })
  @MinLength(3, { message: 'El nombre del proyecto debe tener al menos 3 caracteres' })
  @MaxLength(100, { message: 'El nombre del proyecto no puede exceder 100 caracteres' })
  nombre_proyecto: string;

  @IsOptional()
  @IsString({ message: 'La descripción debe ser texto' })
  @MaxLength(500, { message: 'La descripción no puede exceder 500 caracteres' })
  descripcion?: string;

  @IsString({ message: 'El estado debe ser texto' })
  @IsIn(['activo', 'completo', 'archivado'], { 
    message: 'El estado del proyecto debe ser: activo, completo o archivado' 
  })
  estado: string;

  @IsInt({ message: 'El ID del usuario debe ser un número entero' })
  @Min(1, { message: 'El ID del usuario debe ser un número válido' })
  id_usuario: number;
}