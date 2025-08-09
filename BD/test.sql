CREATE DATABASE BD_SISGECU;
USE BD_SISGECU;

CREATE TABLE ESTUDIANTE (
    id_student INT(11) NOT NULL AUTO_INCREMENT,
    cedula VARCHAR(50) NOT NULL,
    nombres VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    genero VARCHAR(10) NOT NULL,
    correoins VARCHAR(50) NOT NULL,
    contraseña  VARCHAR(30) NOT NULL,
    programa  VARCHAR(100) NOT NULL,
    cuatrimestre INT NOT NULL,
    estado VARCHAR(10) NOT NULL,
    rol VARCHAR(15) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_student)
);

insert into ESTUDIANTE (cedula,nombres,apellidos,genero,correoins,contraseña,programa,cuatrimestre,estado,rol)
values ('5016375','Jesus Manuel', 'Durant Castillo', 'Masculino', 'jdurant@unibarranquilla.edu.co', 'Jemaduca.231004','Tecnico Mantenimiento de Sistemas Informáticos', 4 , 'Activo', 'Estudiante')