// Solo letras (incluyendo acentos), espacios y algunos signos de puntuación básicos
export const NOMBRE_REGEX = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s\-_]+$/;
export const TITULO_REGEX = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s\-_]+$/;

export const MENSAJES_VALIDACION = {
  NOMBRE_SIN_ESPECIALES: 'El nombre solo puede contener letras, espacios, guiones (-) y guiones bajos (_) - SIN NÚMEROS',
  TITULO_SIN_ESPECIALES: 'El título solo puede contener letras, espacios, y los signos: - _ : - SIN NÚMEROS',
  DESCRIPCION_SIN_ESPECIALES: 'La descripción contiene caracteres no permitidos'
};