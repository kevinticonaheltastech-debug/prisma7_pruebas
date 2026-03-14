/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "usuarios" (
    "id_usuario" SERIAL NOT NULL,
    "nombre_usuario" TEXT NOT NULL,
    "email" TEXT,
    "contraseña" TEXT NOT NULL,
    "rol" TEXT NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "proyectos" (
    "id_proyecto" SERIAL NOT NULL,
    "nombre_proyecto" TEXT NOT NULL,
    "descripcion" TEXT,
    "estado" TEXT NOT NULL,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "proyectos_pkey" PRIMARY KEY ("id_proyecto")
);

-- CreateTable
CREATE TABLE "tareas" (
    "id_tarea" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT,
    "estado" TEXT NOT NULL,
    "prioridad" TEXT NOT NULL,
    "id_proyecto" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "tareas_pkey" PRIMARY KEY ("id_tarea")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- AddForeignKey
ALTER TABLE "proyectos" ADD CONSTRAINT "proyectos_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tareas" ADD CONSTRAINT "tareas_id_proyecto_fkey" FOREIGN KEY ("id_proyecto") REFERENCES "proyectos"("id_proyecto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tareas" ADD CONSTRAINT "tareas_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
