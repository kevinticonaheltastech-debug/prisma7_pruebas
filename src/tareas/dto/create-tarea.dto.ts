import { IsString, MinLength, MaxLength, IsOptional, IsIn, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateTareaDto {

  @ApiProperty({
    example: 'Implementar autenticación',
    description: 'Título de la tarea',
    minLength: 3,
    maxLength: 100
  })
  @IsString({ message: 'El título debe ser texto' })
  @MinLength(3, { message: 'El título debe tener al menos 3 caracteres' })
  @MaxLength(100, { message: 'El título no puede exceder 100 caracteres' })
  titulo: string;


  @ApiProperty({
    example: 'Validar las entradas',
    description: 'Descripción detallada de la tarea',
    required: false,
    maxLength: 500
  })
  @IsOptional()
  @IsString({ message: 'La descripción debe ser texto' })
  @MaxLength(500, { message: 'La descripción no puede exceder 500 caracteres' })
  descripcion?: string;

  @ApiProperty({
    example: 'pendiente',
    description: 'Estado de la tarea',
    enum: ['pendiente', 'en_progreso', 'completo']
  })
  @IsString({ message: 'El estado debe ser texto' })
  @IsIn(['pendiente', 'en_progreso', 'completo'], { 
    message: 'El estado de la tarea debe ser: pendiente, en_progreso o completada' 
  })
  estado: string;


  @ApiProperty({
    example: 'alta',
    description: 'Prioridad de la tarea',
    enum: ['baja', 'media', 'alta', 'urgente']
  })
  @IsString({ message: 'La prioridad debe ser texto' })
  @IsIn(['baja', 'media', 'alta', 'urgente'], { 
    message: 'La prioridad debe ser: baja, media, alta o urgente' 
  })
  prioridad: string;

  @ApiProperty({
    example: 1,
    description: 'ID del proyecto al que pertenece la tarea',
    minimum: 1
  })
  @IsInt({ message: 'El ID del proyecto debe ser un número entero' })
  @Min(1, { message: 'El ID del proyecto debe ser un número válido' })
  id_proyecto: number;


  @ApiProperty({
    example: 1,
    description: 'ID del usuario asignado a la tarea',
    minimum: 1
  })
  @IsInt({ message: 'El ID del usuario debe ser un número entero' })
  @Min(1, { message: 'El ID del usuario debe ser un número válido' })
  id_usuario: number;
}