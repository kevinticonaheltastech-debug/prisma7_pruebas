import { IsString, MinLength, MaxLength, IsOptional, IsIn, IsInt, Min, IsEnum, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { EstadoTarea } from '../../enums/estados.enum';
import { PrioridadTarea } from '../../enums/prioridades.enum';
import { TITULO_REGEX, MENSAJES_VALIDACION } from '../../common/constants/regex.constants';
export class CreateTareaDto {

  @ApiProperty({
    example: 'Implementar autenticación',
    description: 'Título de la tarea',
    minLength: 3,
    maxLength: 100
  })
  @IsString({ message: 'El título debe ser texto' })
  @MinLength(3, { message: 'El título debe tener al menos 3 caracteres' })
  @MaxLength(50, { message: 'El título no puede exceder 50 caracteres' })
  @Matches(TITULO_REGEX, { message: MENSAJES_VALIDACION.TITULO_SIN_ESPECIALES })
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

  @ApiProperty({example: 'pendiente',description: 'Estado de la tarea',enum: EstadoTarea})
  @IsString({ message: 'El estado debe ser texto' })
  @IsEnum(EstadoTarea, {message: 'El estado de la tarea debe ser: pendiente, en_proceso o completada'})
  estado: string;


  @ApiProperty({example: 'alta', description: 'Prioridad de la tarea', enum: ['baja', 'media', 'alta', 'urgente']})
  @IsString({ message: 'La prioridad debe ser texto' })
  @IsEnum(PrioridadTarea, {message: 'La prioridad debe ser: baja, media, alta o urgente'})
  prioridad: string;

  @ApiProperty({example: 1,description: 'ID del proyecto al que pertenece la tarea',minimum: 1})
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