export class CreateTareaDto {
  titulo: string;
  descripcion?: string;
  estado: string;      // ej: "pendiente", "en_progreso", "completada"
  prioridad: string;   // ej: "baja", "media", "alta"
  id_proyecto: number;
  id_usuario: number;  // Usuario asignado
}
