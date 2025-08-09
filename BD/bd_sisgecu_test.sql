-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-07-2025 a las 14:26:22
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_sisgecu_test`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `ID_ADMINISTRADOR` int(11) NOT NULL,
  `CEDULA` varchar(20) NOT NULL,
  `NOMBRES` varchar(64) NOT NULL,
  `APELLIDOS` varchar(64) NOT NULL,
  `CORREOINS` varchar(100) NOT NULL,
  `CONTRASEÑA` varchar(100) NOT NULL,
  `TELEFONO` varchar(20) NOT NULL,
  `ROL` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`ID_ADMINISTRADOR`, `CEDULA`, `NOMBRES`, `APELLIDOS`, `CORREOINS`, `CONTRASEÑA`, `TELEFONO`, `ROL`) VALUES
(1, '12345678910', 'Ana Maria', 'Perez', 'aperez@admin.sisgecu.co', 'Admin.Ana1', '3214568899', 'Administrador'),
(2, '12345678911', 'Juan Carlos', 'Gomez', 'jgomez@admin.sisgecu.co', 'Admin.Juan2', '3214568900', 'Administrador'),
(3, '12345678912', 'Laura Sofia', 'Diaz', 'ldiaz@admin.sisgecu.co', 'Admin.Laura3', '3214568901', 'Administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alimento`
--

CREATE TABLE `alimento` (
  `ID_ALIMENTO` int(11) NOT NULL,
  `ID_CATEGORIA` int(11) NOT NULL,
  `NOMBRE` varchar(64) NOT NULL,
  `CANTIDAD` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `ID_CATEGORIA` int(11) NOT NULL,
  `NOMBRE` varchar(64) NOT NULL,
  `DESCRIPCION` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`ID_CATEGORIA`, `NOMBRE`, `DESCRIPCION`) VALUES
(1, 'Almuerzo', 'Platos completos y nutritivos, ideales para recargar energía a mitad del día. Usualmente incluyen una fuente de proteína, carbohidratos complejos y vegetales.'),
(2, 'Desayuno', 'Opciones energéticas para empezar el día. Combinan carbohidratos para la energía rápida, proteínas para la saciedad y fibra para una digestión saludable.'),
(3, 'Merienda', 'Porciones más pequeñas y ligeras, perfectas para satisfacer el hambre entre comidas principales. Aportan un impulso de energía sin ser demasiado pesadas.'),
(4, 'Cena', 'Comidas más ligeras que el almuerzo, diseñadas para una fácil digestión antes de dormir. Suelen enfocarse en proteínas magras y vegetales.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cupon`
--

CREATE TABLE `cupon` (
  `ID_CUPON` int(11) NOT NULL,
  `ID_ALIMENTO` int(11) NOT NULL,
  `CODIGO_QR` varchar(255) DEFAULT NULL,
  `FECHACREA` timestamp NOT NULL DEFAULT current_timestamp(),
  `FECHAEXP` date DEFAULT NULL,
  `ESTADO` varchar(20) NOT NULL,
  `ID_ESTUDIANTE` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entrega`
--

CREATE TABLE `entrega` (
  `ID_ENTREGA` int(11) NOT NULL,
  `ID_REPARTIDOR` int(11) NOT NULL,
  `ID_ESTUDIANTE` int(11) NOT NULL,
  `ID_SEDE` int(11) NOT NULL,
  `ID_CUPON` int(11) NOT NULL,
  `FECHA` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante`
--

CREATE TABLE `estudiante` (
  `ID_ESTUDIANTE` int(11) NOT NULL,
  `CEDULA` varchar(20) NOT NULL,
  `NOMBRES` varchar(64) NOT NULL,
  `APELLIDOS` varchar(64) NOT NULL,
  `GENERO` varchar(10) NOT NULL,
  `CORREOINS` varchar(100) NOT NULL,
  `CONTRASEÑA` varchar(100) NOT NULL,
  `PROGRAMA` varchar(64) NOT NULL,
  `CUATRIMESTRE` int(2) NOT NULL,
  `ESTADO` varchar(20) NOT NULL,
  `FECHARE` timestamp NOT NULL DEFAULT current_timestamp(),
  `ROL` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estudiante`
--

INSERT INTO `estudiante` (`ID_ESTUDIANTE`, `CEDULA`, `NOMBRES`, `APELLIDOS`, `GENERO`, `CORREOINS`, `CONTRASEÑA`, `PROGRAMA`, `CUATRIMESTRE`, `ESTADO`, `FECHARE`, `ROL`) VALUES
(1, '5016375', 'Jesus Manuel', 'Durant Castillo', 'Masculino', 'jdurant@unibarranquilla.edu.co', 'durant.123', 'Sistemas', 2, 'Activo', '2025-07-22 01:54:39', 'Estudiante'),
(2, '1001234567', 'Ana Sofia', 'Garcia Perez', 'Femenino', 'agarcia@unibarranquilla.edu.co', 'Anaso.5678', 'Ingenieria de Sistemas', 6, 'Activo', '2025-07-22 02:39:36', 'Estudiante'),
(3, '1002345678', 'Luis Fernando', 'Ramirez Soto', 'Masculino', 'lramirez@unibarranquilla.edu.co', 'Lufer.9012', 'Contaduría Pública', 2, 'Activo', '2025-07-22 02:39:51', 'Estudiante'),
(4, '1004567890', 'Carlos Andres', 'Vargas Rojas', 'Masculino', 'cvargas@unibarranquilla.edu.co', 'Carvar.7890', 'Comunicación Social', 5, 'Activo', '2025-07-22 02:50:55', 'Estudiante'),
(5, '1003456789', 'Maria Jose', 'Diaz Gomez', 'Femenino', 'mdiaz@unibarranquilla.edu.co', 'Majogom.3456', 'Administración de Empresas', 8, 'Activo', '2025-07-22 03:17:33', 'Estudiante'),
(6, '1003456788', 'Maria Andrea', 'Diaz Patiño', 'Femenino', 'mdiaz@unibarranquilla.edu.co', 'Majogom.3456', 'Administración de Empresas', 10, 'Activo', '2025-07-22 03:18:51', 'Estudiante'),
(7, '1043439631', 'Jose Manuel', 'Durant Durant', 'Masculino', 'jmdurant@unibarranquilla.edu.co', 'Jomadudu.9631', 'Mantenimiento de Sistemas Informáticos', 3, 'Activo', '2025-07-25 15:42:19', 'Estudiante');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `repartidor`
--

CREATE TABLE `repartidor` (
  `ID_REPARTIDOR` int(11) NOT NULL,
  `CEDULA` varchar(20) NOT NULL,
  `NOMBRES` varchar(64) NOT NULL,
  `APELLIDOS` varchar(64) NOT NULL,
  `CORREOINS` varchar(100) NOT NULL,
  `CONTRASEÑA` varchar(100) NOT NULL,
  `TELEFONO` varchar(20) NOT NULL,
  `ROL` varchar(20) NOT NULL,
  `GENERO` varchar(10) NOT NULL,
  `FECHAING` timestamp NOT NULL DEFAULT current_timestamp(),
  `FECHASAL` date DEFAULT NULL,
  `ESTADO` varchar(20) NOT NULL,
  `TURNO` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `repartidor`
--

INSERT INTO `repartidor` (`ID_REPARTIDOR`, `CEDULA`, `NOMBRES`, `APELLIDOS`, `CORREOINS`, `CONTRASEÑA`, `TELEFONO`, `ROL`, `GENERO`, `FECHAING`, `FECHASAL`, `ESTADO`, `TURNO`) VALUES
(1, '1044456730', 'Andres Felipe', 'Vargas Perez', 'avargas@repartidor.sisgecu.co', 'Andres.123', '3001234567', 'Repartidor', 'Masculino', '2025-07-22 05:43:36', '2025-08-09', 'Despedido', 'Mañana'),
(2, '1045567841', 'Sofia Alejandra', 'Rojas Diaz', 'srojas@repartidor.sisgecu.co', 'Sofia.456', '3012345678', 'Repartidor', 'Femenino', '2025-07-22 05:49:20', NULL, 'Activo', 'Tarde'),
(3, '1046678952', 'Juan David', 'Castro Leon', 'jcastro@repartidor.sisgecu.co', 'Juan.789', '3023456789', 'Repartidor', 'Masculino', '2025-07-22 05:49:44', NULL, 'Activo', 'Mañana');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sede`
--

CREATE TABLE `sede` (
  `ID_SEDE` int(2) NOT NULL,
  `NOMBRE` varchar(64) NOT NULL,
  `DIRECCION` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`ID_ADMINISTRADOR`),
  ADD UNIQUE KEY `CEDULA` (`CEDULA`);

--
-- Indices de la tabla `alimento`
--
ALTER TABLE `alimento`
  ADD PRIMARY KEY (`ID_ALIMENTO`),
  ADD KEY `idx_alimento_categoria` (`ID_CATEGORIA`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`ID_CATEGORIA`);

--
-- Indices de la tabla `cupon`
--
ALTER TABLE `cupon`
  ADD PRIMARY KEY (`ID_CUPON`),
  ADD KEY `idx_cupon_alimento` (`ID_ALIMENTO`),
  ADD KEY `idx_cupon_estudiante` (`ID_ESTUDIANTE`);

--
-- Indices de la tabla `entrega`
--
ALTER TABLE `entrega`
  ADD PRIMARY KEY (`ID_ENTREGA`),
  ADD KEY `idx_entrega_estudiante` (`ID_ESTUDIANTE`),
  ADD KEY `idx_entrega_repartidor` (`ID_REPARTIDOR`),
  ADD KEY `idx_entrega_sede` (`ID_SEDE`),
  ADD KEY `idx_entrega_cupon` (`ID_CUPON`);

--
-- Indices de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD PRIMARY KEY (`ID_ESTUDIANTE`),
  ADD UNIQUE KEY `CEDULA` (`CEDULA`);

--
-- Indices de la tabla `repartidor`
--
ALTER TABLE `repartidor`
  ADD PRIMARY KEY (`ID_REPARTIDOR`),
  ADD UNIQUE KEY `CEDULA` (`CEDULA`);

--
-- Indices de la tabla `sede`
--
ALTER TABLE `sede`
  ADD PRIMARY KEY (`ID_SEDE`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrador`
--
ALTER TABLE `administrador`
  MODIFY `ID_ADMINISTRADOR` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `alimento`
--
ALTER TABLE `alimento`
  MODIFY `ID_ALIMENTO` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `ID_CATEGORIA` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `cupon`
--
ALTER TABLE `cupon`
  MODIFY `ID_CUPON` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `entrega`
--
ALTER TABLE `entrega`
  MODIFY `ID_ENTREGA` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  MODIFY `ID_ESTUDIANTE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `repartidor`
--
ALTER TABLE `repartidor`
  MODIFY `ID_REPARTIDOR` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `sede`
--
ALTER TABLE `sede`
  MODIFY `ID_SEDE` int(2) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alimento`
--
ALTER TABLE `alimento`
  ADD CONSTRAINT `alimento_ibfk_1` FOREIGN KEY (`ID_CATEGORIA`) REFERENCES `categoria` (`ID_CATEGORIA`);

--
-- Filtros para la tabla `cupon`
--
ALTER TABLE `cupon`
  ADD CONSTRAINT `cupon_ibfk_1` FOREIGN KEY (`ID_ALIMENTO`) REFERENCES `alimento` (`ID_ALIMENTO`),
  ADD CONSTRAINT `cupon_ibfk_2` FOREIGN KEY (`ID_ESTUDIANTE`) REFERENCES `estudiante` (`ID_ESTUDIANTE`);

--
-- Filtros para la tabla `entrega`
--
ALTER TABLE `entrega`
  ADD CONSTRAINT `entrega_ibfk_1` FOREIGN KEY (`ID_REPARTIDOR`) REFERENCES `repartidor` (`ID_REPARTIDOR`),
  ADD CONSTRAINT `entrega_ibfk_2` FOREIGN KEY (`ID_ESTUDIANTE`) REFERENCES `estudiante` (`ID_ESTUDIANTE`),
  ADD CONSTRAINT `entrega_ibfk_3` FOREIGN KEY (`ID_SEDE`) REFERENCES `sede` (`ID_SEDE`),
  ADD CONSTRAINT `entrega_ibfk_4` FOREIGN KEY (`ID_CUPON`) REFERENCES `cupon` (`ID_CUPON`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
