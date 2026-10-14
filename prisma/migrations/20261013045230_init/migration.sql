-- CreateTable
CREATE TABLE "cuenta" (
    "id" UUID NOT NULL,
    "correo" VARCHAR(150) NOT NULL,
    "contrasenia" VARCHAR(255) NOT NULL,
    "rol" VARCHAR(50) NOT NULL,
    "estado" VARCHAR(50) NOT NULL,
    "fecha_creacion" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cuenta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" UUID NOT NULL,
    "primer_nombre" VARCHAR(50) NOT NULL,
    "segundo_nombre" VARCHAR(50),
    "apellido_paterno" VARCHAR(50) NOT NULL,
    "apellido_materno" VARCHAR(50) NOT NULL,
    "puesto" VARCHAR(100),
    "foto_perfil" VARCHAR(255) NOT NULL,
    "biografia" TEXT,
    "cuenta_id" UUID NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "publicacion" (
    "id" UUID NOT NULL,
    "titulo" VARCHAR(150) NOT NULL,
    "contenido" TEXT NOT NULL,
    "fecha_creacion" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuario_id" UUID NOT NULL,

    CONSTRAINT "publicacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comentario" (
    "id" UUID NOT NULL,
    "contenido" TEXT NOT NULL,
    "fecha" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuario_id" UUID NOT NULL,
    "publicacion_id" UUID NOT NULL,

    CONSTRAINT "comentario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foto" (
    "id" SERIAL NOT NULL,
    "publicacion_id" UUID NOT NULL,
    "url_imagen" VARCHAR(255) NOT NULL,
    "fecha" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "foto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reaccion" (
    "id" UUID NOT NULL,
    "publicacion_id" UUID NOT NULL,
    "usuario_id" UUID NOT NULL,
    "fecha" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reaccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "opinion" (
    "id" UUID NOT NULL,
    "usuario_id" UUID,
    "mensaje" TEXT NOT NULL,
    "fecha" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado_aprobacion" VARCHAR(50) NOT NULL,

    CONSTRAINT "opinion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cuenta_correo_key" ON "cuenta"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_cuenta_id_key" ON "usuario"("cuenta_id");

-- CreateIndex
CREATE UNIQUE INDEX "reaccion_usuario_id_publicacion_id_key" ON "reaccion"("usuario_id", "publicacion_id");

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_cuenta_id_fkey" FOREIGN KEY ("cuenta_id") REFERENCES "cuenta"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "publicacion" ADD CONSTRAINT "publicacion_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentario" ADD CONSTRAINT "comentario_publicacion_id_fkey" FOREIGN KEY ("publicacion_id") REFERENCES "publicacion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentario" ADD CONSTRAINT "comentario_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foto" ADD CONSTRAINT "foto_publicacion_id_fkey" FOREIGN KEY ("publicacion_id") REFERENCES "publicacion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reaccion" ADD CONSTRAINT "reaccion_publicacion_id_fkey" FOREIGN KEY ("publicacion_id") REFERENCES "publicacion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reaccion" ADD CONSTRAINT "reaccion_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "opinion" ADD CONSTRAINT "opinion_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
