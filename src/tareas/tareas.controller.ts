import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';

@Controller('tareas')
export class TareasController {
  constructor(private readonly tareasService: TareasService) {}

  @Post()
  create(@Body() createTareaDto: CreateTareaDto) {
    return this.tareasService.create(createTareaDto);
  }

  @Get()
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
  findByProyecto(@Param('id_proyecto', ParseIntPipe) id_proyecto: number) {
    return this.tareasService.findByProyecto(id_proyecto);
  }

  @Get('usuario/:id_usuario')
  findByUsuario(@Param('id_usuario', ParseIntPipe) id_usuario: number) {
    return this.tareasService.findByUsuario(id_usuario);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tareasService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTareaDto: UpdateTareaDto,
  ) {
    return this.tareasService.update(id, updateTareaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tareasService.remove(id);
  }
}