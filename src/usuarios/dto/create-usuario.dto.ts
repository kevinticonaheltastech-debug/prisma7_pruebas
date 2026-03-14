import { IsString, IsEmail, MinLength, MaxLength, Matches, IsOptional, IsIn } from 'class-validator';

export class CreateUsuarioDto {
    @IsString({ message: 'El nombre debe ser texto' })
    @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
    @MaxLength(50, { message: 'El nombre no puede exceder 50 caracteres' })
    @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, { 
    message: 'El nombre solo puede contener letras y espacios' 
})
    nombre_usuario: string;

    @IsEmail({}, { message: 'El email no tiene formato válido' })
    email: string;

    @IsString({ message: 'La contraseña debe ser texto' })
    @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
    @MaxLength(20, { message: 'La contraseña no puede exceder 20 caracteres' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, { 
    message: 'La contraseña debe contener al menos una mayúscula, una minúscula y un número' 
})
    contraseña: string;

    @IsString({ message: 'El rol debe ser texto' })
    @IsIn(['admin', 'user'], { 
    message: 'Rol debe ser: admin o user.' 
})
rol: string;
}