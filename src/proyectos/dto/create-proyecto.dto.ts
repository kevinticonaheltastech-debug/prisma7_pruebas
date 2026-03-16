import { IsString, MinLength, MaxLength, IsOptional, IsIn, IsInt, Min, IsEnum, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { EstadoProyecto } from '../../enums/estados.enum';
import { NOMBRE_REGEX ,MENSAJES_VALIDACION} from '../../common/constants/regex.constants';

export class CreateProyectoDto {
  

  @ApiProperty({
    example: 'Sistema de Gestión',
    description: 'Nombre del proyecto',
    minLength: 3,
    maxLength: 100
  })
  @IsString({ message: 'El nombre del proyecto debe ser texto' })
  @MinLength(3, { message: 'El nombre del proyecto debe tener al menos 3 caracteres' })
  @MaxLength(100, { message: 'El nombre del proyecto no puede exceder 100 caracteres' })
  @Matches(NOMBRE_REGEX, { message: MENSAJES_VALIDACION.NOMBRE_SIN_ESPECIALES })  
  nombre_proyecto: string;


  @ApiProperty({
    example: 'Proyecto principal de la empresa',
    description: 'Descripción detallada del proyecto',
    required: false,
    maxLength: 500
  })
  @IsOptional()
  @IsString({ message: 'La descripción debe ser texto' })
  @MaxLength(500, { message: 'La descripción no puede exceder 500 caracteres' })
  descripcion?: string;



  @ApiProperty({ example: 'activo',description: 'Estado del proyecto',enum: EstadoProyecto})
  @IsString({ message: 'El estado debe ser texto' })
  @IsEnum(EstadoProyecto, { message: 'El estado del proyecto debe ser: activo, completo o archivado' }) 
  estado: string;


  @ApiProperty({
    example: 1,
    description: 'ID del usuario dueño del proyecto',
    minimum: 1
  })
  @IsInt({ message: 'El ID del usuario debe ser un número entero' })
  @Min(1, { message: 'El ID del usuario debe ser un número válido' })
  id_usuario: number;
}