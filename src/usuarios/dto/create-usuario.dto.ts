import { IsString, IsEmail, MinLength, MaxLength, Matches, IsOptional, IsIn, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { RolUsuario } from '../../enums/estados.enum';
import { NOMBRE_REGEX ,MENSAJES_VALIDACION} from '../../common/constants/regex.constants';
export class CreateUsuarioDto {

    @ApiProperty({
    example: 'Juan Pérez',
    description: 'Nombre completo del usuario',
    minLength: 3,
    maxLength: 50
})
    @IsString({ message: 'El nombre debe ser texto' })
    @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
    @MaxLength(50, { message: 'El nombre no puede exceder 50 caracteres' })
    @Matches(NOMBRE_REGEX, {message: MENSAJES_VALIDACION.NOMBRE_SIN_ESPECIALES})
    nombre_usuario: string;


    @ApiProperty({
    example: 'juan@example.com',
    description: 'Correo electrónico del usuario',
    uniqueItems: true
  })
    @IsEmail({}, { message: 'El email no tiene formato válido' })
    email: string;


    @ApiProperty({
    example: 'Abc123456',
    description: 'Contraseña (mínimo 8 caracteres, mayúscula, minúscula y número)',
    minLength: 8,
    maxLength: 20,
    writeOnly: true
  })
    @IsString({ message: 'La contraseña debe ser texto' })
    @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
    @MaxLength(20, { message: 'La contraseña no puede exceder 20 caracteres' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, { 
    message: 'La contraseña debe contener al menos una mayúscula, una minúscula y un número' 
})
    contraseña: string;

    @ApiProperty({ example: 'admin', description: 'Rol del usuario', enum: RolUsuario })
    @IsString({ message: 'El rol debe ser texto' })
    @IsEnum(RolUsuario, { message: `El rol debe ser uno de los siguientes: "admin" , "usuario"` })
rol: string;
}