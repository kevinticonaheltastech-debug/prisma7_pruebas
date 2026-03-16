import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { EstadoTarea } from 'src/enums/estados.enum';
import { PrioridadTarea } from 'src/enums/prioridades.enum';

@ApiTags('Tareas')
@Controller('tareas')
export class TareasController {
  constructor(private readonly tareasService: TareasService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva tarea' })
  @ApiResponse({ status: 201, description: 'Tarea creada exitosamente' })
  @ApiResponse({ status: 422, description: 'Error de validación' })
  create(@Body() createTareaDto: CreateTareaDto) {
    return this.tareasService.create(createTareaDto);
  }

  @Get()
  @ApiOperation({ 
    summary: 'Obtener todas las tareas',
    description: 'Devuelve todas las tareas. Opcionalmente puedes filtrar por estado o prioridad'
  })
  @ApiResponse({ status: 200, description: 'Lista de tareas obtenida correctamente' })
  @ApiQuery({
    name: 'estado',
    required: false,          
    description: 'Filtrar por estado de la tarea',
    enum: EstadoTarea
  })
  @ApiQuery({
    name: 'prioridad',
    required: false,           
    description: 'Filtrar por prioridad de la tarea',
    enum: PrioridadTarea
  })
  findAll(
    @Query('estado') estado?: string,
    @Query('prioridad') prioridad?: string,
  ) {
    if (estado) {
      return this.tareasService.findByEstado(estado);
    }
    if (prioridad) {
      return this.tareasService.findByPrioridad(prioridad);
    }
    return this.tareasService.findAll();
  }

  @Get('proyecto/:id_proyecto')
  @ApiOperation({ summary: 'Obtener tareas por proyecto' })
  @ApiParam({ name: 'id_proyecto', description: 'ID del proyecto', type: Number })
  @ApiResponse({ status: 200, description: 'Lista de tareas del proyecto' })
  findByProyecto(@Param('id_proyecto', ParseIntPipe) id_proyecto: number) {
    return this.tareasService.findByProyecto(id_proyecto);
  }

  @Get('usuario/:id_usuario')
  @ApiOperation({ summary: 'Obtener tareas por usuario' })
  @ApiParam({ name: 'id_usuario', description: 'ID del usuario', type: Number })
  @ApiResponse({ status: 200, description: 'Lista de tareas del usuario' })
  findByUsuario(@Param('id_usuario', ParseIntPipe) id_usuario: number) {
    return this.tareasService.findByUsuario(id_usuario);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una tarea por ID' })
  @ApiParam({ name: 'id', description: 'ID de la tarea', type: Number })
  @ApiResponse({ status: 200, description: 'Tarea encontrada' })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tareasService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una tarea' })
  @ApiParam({ name: 'id', description: 'ID de la tarea', type: Number })
  @ApiResponse({ status: 200, description: 'Tarea actualizada' })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada' })
  @ApiResponse({ status: 422, description: 'Error de validación' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTareaDto: UpdateTareaDto,
  ) {
    return this.tareasService.update(id, updateTareaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una tarea' })
  @ApiParam({ name: 'id', description: 'ID de la tarea', type: Number })
  @ApiResponse({ status: 200, description: 'Tarea eliminada' })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tareasService.remove(id);
  }
}