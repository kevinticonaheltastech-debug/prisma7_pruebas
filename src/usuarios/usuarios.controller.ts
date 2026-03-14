import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('Usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo usuario' })
  @ApiResponse({ status: 201, description: 'Usuario creado con exito.' })
  @ApiResponse({ status: 422, description: 'Error de validación' })
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }




  @Get()
  @ApiOperation({ summary: 'Mostrar todos los usuarios' })
  @ApiResponse({ status: 200, description: 'Usuarios con sus proyectos y tareas' })
  findAll() {
    return this.usuariosService.findAll();
  }





  @Get(':id')
  @ApiOperation({ summary: 'Mostrar un usuario por ID' })
  @ApiParam({ name: 'id', description: 'ID del usuario', type: Number })
  @ApiResponse({ status: 200, description: 'Usuario encontrado' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.findOne(id);
  }





  @Get(':id/proyectos')
  @ApiOperation({ summary: 'Obtener proyectos de un usuario' })
  @ApiParam({ name: 'id', description: 'ID del usuario', type: Number })
  findProyectos(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.findProyectos(id);
  }

  @Get(':id/tareas')
  @ApiOperation({ summary: 'Obtener tareas asignadas a un usuario' })
  @ApiParam({ name: 'id', description: 'ID del usuario', type: Number })
  findTareas(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.findTareas(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un usuario' })
  @ApiParam({ name: 'id', description: 'ID del usuario', type: Number })
  @ApiResponse({ status: 200, description: 'Usuario actualizado' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    return this.usuariosService.update(id, updateUsuarioDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un usuario' })
  @ApiParam({ name: 'id', description: 'ID del usuario', type: Number })
  @ApiResponse({ status: 200, description: 'Usuario eliminado' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.remove(id);
  }
}
