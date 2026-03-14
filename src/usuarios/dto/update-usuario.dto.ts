import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsOptional, IsString, MinLength, IsEmail, IsIn } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    @IsOptional()
    @IsString()
    @MinLength(3)
    nombre_usuario?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    @MinLength(8)
    contraseña?: string;

    @IsOptional()
    @IsString()
    @IsIn(['admin', 'user'],{message:'El rol debe ser admin o  user'})
    rol?: string;
}
