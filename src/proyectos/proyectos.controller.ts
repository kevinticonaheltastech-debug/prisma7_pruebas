import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ProyectosService } from './proyectos.service';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';


@ApiTags('Proyectos')
@Controller('proyectos')
export class ProyectosController {
  constructor(private readonly proyectosService: ProyectosService) {}


  @ApiOperation({ summary: 'Crear un nuevo proyecto' })
  @ApiResponse({ status: 201, description: 'Proyecto creado exitosamente' })
  @ApiResponse({ status: 422, description: 'Error de validación' })
  @Post()
  create(@Body() createProyectoDto: CreateProyectoDto) {
    return this.proyectosService.create(createProyectoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los proyectos' })
  @ApiResponse({ status: 200, description: 'Lista de proyectos con sus tareas y su usuario' })
  findAll() {
    return this.proyectosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un proyecto por ID' })
  @ApiParam({ name: 'id', description: 'ID del proyecto', type: Number })
  @ApiResponse({ status: 200, description: 'Proyecto encontrado' })
  @ApiResponse({ status: 404, description: 'Proyecto no encontrado' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.proyectosService.findOne(id);
  }

  @Get(':id/tareas')
  @ApiOperation({ summary: 'Obtener tareas de un proyecto' })
  @ApiParam({ name: 'id', description: 'ID del proyecto', type: Number })
  findTareas(@Param('id', ParseIntPipe) id: number) {
    return this.proyectosService.findTareas(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un proyecto' })
  @ApiParam({ name: 'id', description: 'ID del proyecto', type: Number })
  @ApiResponse({ status: 200, description: 'Proyecto actualizado' })
  @ApiResponse({ status: 404, description: 'Proyecto no encontrado' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProyectoDto: UpdateProyectoDto,
  ) {
    return this.proyectosService.update(id, updateProyectoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un proyecto' })
  @ApiParam({ name: 'id', description: 'ID del proyecto', type: Number })
  @ApiResponse({ status: 200, description: 'Proyecto eliminado' })
  @ApiResponse({ status: 404, description: 'Proyecto no encontrado' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.proyectosService.remove(id);
  }
}
