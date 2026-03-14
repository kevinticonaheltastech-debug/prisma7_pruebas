import { IsString, MinLength, MaxLength, IsOptional, IsIn, IsInt, Min } from 'class-validator';

export class CreateTareaDto {
  @IsString({ message: 'El título debe ser texto' })
  @MinLength(3, { message: 'El título debe tener al menos 3 caracteres' })
  @MaxLength(100, { message: 'El título no puede exceder 100 caracteres' })
  titulo: string;

  @IsOptional()
  @IsString({ message: 'La descripción debe ser texto' })
  @MaxLength(500, { message: 'La descripción no puede exceder 500 caracteres' })
  descripcion?: string;

  @IsString({ message: 'El estado debe ser texto' })
  @IsIn(['pendiente', 'en_progreso', 'completada'], { 
    message: 'El estado de la tarea debe ser: pendiente, en_progreso o completada' 
  })
  estado: string;

  @IsString({ message: 'La prioridad debe ser texto' })
  @IsIn(['baja', 'media', 'alta', 'critica'], { 
    message: 'La prioridad debe ser: baja, media, alta o critica' 
  })
  prioridad: string;

  @IsInt({ message: 'El ID del proyecto debe ser un número entero' })
  @Min(1, { message: 'El ID del proyecto debe ser un número válido' })
  id_proyecto: number;

  @IsInt({ message: 'El ID del usuario debe ser un número entero' })
  @Min(1, { message: 'El ID del usuario debe ser un número válido' })
  id_usuario: number;
}