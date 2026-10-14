CREATE TABLE cuenta (
    id SERIAL PRIMARY KEY,
    correo VARCHAR(150) NOT NULL UNIQUE,
    contrasenia VARCHAR(255) NOT NULL,
    rol VARCHAR(50) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    primer_nombre VARCHAR(50) NOT NULL,
    segundo_nombre VARCHAR(50),
    apellido_paterno VARCHAR(50) NOT NULL,
    apellido_materno VARCHAR(50),
    puesto VARCHAR(100),
    foto_perfil VARCHAR(255),
    biografia TEXT,
    cuenta_id INT NOT NULL UNIQUE,
    CONSTRAINT fk_usuario_cuenta FOREIGN KEY (cuenta_id) REFERENCES cuenta(id) ON DELETE CASCADE
);

CREATE TABLE publicacion (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    contenido TEXT NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    usuario_id INT NOT NULL,
    CONSTRAINT fk_publicacion_usuario FOREIGN KEY (usuario_id) REFERENCES usuario(id) ON DELETE CASCADE
);

CREATE TABLE comentario (
    id SERIAL PRIMARY KEY,
    contenido TEXT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    usuario_id INT NOT NULL,
    publicacion_id INT NOT NULL,
    CONSTRAINT fk_comentario_usuario FOREIGN KEY (usuario_id) REFERENCES usuario(id) ON DELETE CASCADE,
    CONSTRAINT fk_comentario_publicacion FOREIGN KEY (publicacion_id) REFERENCES publicacion(id) ON DELETE CASCADE
);

CREATE TABLE foto (
    id SERIAL PRIMARY KEY,
    publicacion_id INT NOT NULL,
    url_imagen VARCHAR(255) NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_foto_publicacion FOREIGN KEY (publicacion_id) REFERENCES publicacion(id) ON DELETE CASCADE
);

CREATE TABLE reaccion (
    id SERIAL PRIMARY KEY,
    publicacion_id INT NOT NULL,
    usuario_id INT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_reaccion_publicacion FOREIGN KEY (publicacion_id) REFERENCES publicacion(id) ON DELETE CASCADE,
    CONSTRAINT fk_reaccion_usuario FOREIGN KEY (usuario_id) REFERENCES usuario(id) ON DELETE CASCADE,
    CONSTRAINT uk_usuario_publicacion_reaccion UNIQUE (usuario_id, publicacion_id)
);

CREATE TABLE opinion (
    id SERIAL PRIMARY KEY,
    usuario_id INT,
    mensaje TEXT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado_aprobacion VARCHAR(50) NOT NULL,
    CONSTRAINT fk_opinion_usuario FOREIGN KEY (usuario_id) REFERENCES usuario(id) ON DELETE SET NULL
);