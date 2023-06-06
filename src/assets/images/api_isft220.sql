-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 06-06-2023 a las 12:09:20
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `api_isft220`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `legajo` varchar(255) NOT NULL,
  `dni` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `carreraId` int(11) NOT NULL,
  `f_nac` datetime NOT NULL,
  `curso` int(11) NOT NULL,
  `avatar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`id`, `nombre`, `apellido`, `legajo`, `dni`, `email`, `telefono`, `password`, `estado`, `carreraId`, `f_nac`, `curso`, `avatar`) VALUES
(1, 'Alejandro', 'Maidana', '121311', '94333521', 'am@isft220.com.ar', '43326666', '$2b$10$wUedh/1IgGHMu9M5uYBQce8koDTPMJ7usD9ybfG72rFgBOkIBPMo.', 1, 1, '1988-08-08 11:00:06', 3, ''),
(3, 'Ariel', 'Valcarce', '123457', '31444333', 'av@isft220.edu.ar', '1544446666', '$2b$10$0sTDRBjo9KTw3Ehq1swlk.A3nukMYBOxkX4ZhylmwbNs9JyhFJH2G', 1, 1, '1984-12-11 11:00:39', 3, ''),
(4, 'Armando', 'Alcaraz', '131122', '40666555', 'ba@isft220.edu.ar', '1544446666', '$2b$10$9Y5F4ISnYnKTLC1c2iI8e./LV1ysXX2K4rdU/VLfXXE.tf0qi4RVy', 1, 1, '1995-12-25 11:00:50', 3, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignaturas`
--

CREATE TABLE `asignaturas` (
  `id` int(11) NOT NULL,
  `subjectId` int(11) NOT NULL,
  `docenteId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `asignaturas`
--

INSERT INTO `asignaturas` (`id`, `subjectId`, `docenteId`) VALUES
(1, 18, 3),
(2, 27, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carreras`
--

CREATE TABLE `carreras` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `carreras`
--

INSERT INTO `carreras` (`id`, `nombre`) VALUES
(1, 'Tecnico Superior en Desarrollo de Software'),
(2, 'Tecnico Superior en Alimentos'),
(3, 'Tecnico Superior en Seguridad e Higiene');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docentes`
--

CREATE TABLE `docentes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `matricula` varchar(255) NOT NULL,
  `dni` varchar(255) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `f_nac` datetime NOT NULL,
  `avatar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `docentes`
--

INSERT INTO `docentes` (`id`, `nombre`, `apellido`, `email`, `telefono`, `password`, `matricula`, `dni`, `estado`, `f_nac`, `avatar`) VALUES
(1, 'Ariel ', 'Bulacio', 'ab@abc.gov.ar', '1544446663', '$2b$10$hCJ7V7U2kziK2eT0A0Q3U.PVQGpjAJjEoWRfMPHul9QUKMxPnVhnK', '755966', '28666333', 1, '2023-06-05 02:06:46', ''),
(2, 'Emir', 'Garcia', 'eg@abc.gov.ar', '47778888', '123456', '733664', '33222178', 1, '1986-09-05 02:08:31', '1'),
(3, 'Walter', 'Pintos', 'wp@abc.gov.ar', '1596327878', '$2b$10$OThptxZ1Ax8Pbbd0ZM0F1uhcuc0bVC95F1Uo3iQHiXa2TlIjSHkq.', '633312', '40523300', 0, '1990-10-11 02:08:31', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `exams`
--

CREATE TABLE `exams` (
  `id` int(11) NOT NULL,
  `alumnoId` int(11) NOT NULL,
  `finalId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `finals`
--

CREATE TABLE `finals` (
  `id` int(11) NOT NULL,
  `asignaturaId` int(11) NOT NULL,
  `primer_llamado` datetime NOT NULL,
  `segundo_llamado` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grades`
--

CREATE TABLE `grades` (
  `id` int(11) NOT NULL,
  `alumnoId` int(11) NOT NULL,
  `asignaturaId` int(11) NOT NULL,
  `primer_parcial` double NOT NULL,
  `segundo_parcial` double NOT NULL,
  `final` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `curso` varchar(255) NOT NULL,
  `carreraId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `subjects`
--

INSERT INTO `subjects` (`id`, `nombre`, `curso`, `carreraId`) VALUES
(1, 'Sistemas Digitales', '1', 1),
(2, 'Laboratorio de Hardware', '1', 1),
(3, 'Base de Datos', '1', 1),
(4, 'Introduccion a la Programacion', '1', 1),
(5, 'Sistemas Operativos', '1', 1),
(6, 'Analisis Matematico', '1', 1),
(7, 'Redes', '1', 1),
(8, 'Practicas Profesionalizantes 1', '1', 1),
(17, 'Ingles Tecnico 1', '2', 1),
(18, 'Diseño Web', '2', 1),
(19, 'Algebra', '2', 1),
(20, 'Estadistica y Probabilidad', '2', 1),
(21, 'Programacion ', '2', 1),
(22, 'Programacion Orientada a Objetos', '2', 1),
(23, 'Desarrollo de Aplicativos Moviles', '2', 1),
(24, 'Practicas Profesionalizantes 2', '2', 1),
(25, 'Ingles Tecnico 2', '3', 1),
(26, 'Gestion de Proyectos', '3', 1),
(27, 'Practicas Profesionalizantes 3', '3', 1),
(28, 'Ingenieria de Software', '3', 1),
(29, 'Sistemas Web', '3', 1),
(30, 'Testing de dispositivos', '3', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'master', '$2b$10$7aIHA2w6JrVD1qnfQxueVuyjYMzKPmWBETSi1zJBrNfYwDoj5ICuy'),
(2, 'master2', '$2b$10$aFW5nYFz2ugFidmH/DDUa.t.5zPyUVaJiVwM65Lba/SdGZ0QjZj3K');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carreraId` (`carreraId`);

--
-- Indices de la tabla `asignaturas`
--
ALTER TABLE `asignaturas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subjectId` (`subjectId`),
  ADD KEY `docenteId` (`docenteId`);

--
-- Indices de la tabla `carreras`
--
ALTER TABLE `carreras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `docentes`
--
ALTER TABLE `docentes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `exams`
--
ALTER TABLE `exams`
  ADD PRIMARY KEY (`id`),
  ADD KEY `alumnoId` (`alumnoId`),
  ADD KEY `finalId` (`finalId`);

--
-- Indices de la tabla `finals`
--
ALTER TABLE `finals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `asignaturaId` (`asignaturaId`);

--
-- Indices de la tabla `grades`
--
ALTER TABLE `grades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `alumnoId` (`alumnoId`),
  ADD KEY `asignaturaId` (`asignaturaId`);

--
-- Indices de la tabla `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carreraId` (`carreraId`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `asignaturas`
--
ALTER TABLE `asignaturas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `carreras`
--
ALTER TABLE `carreras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `docentes`
--
ALTER TABLE `docentes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `exams`
--
ALTER TABLE `exams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `finals`
--
ALTER TABLE `finals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `grades`
--
ALTER TABLE `grades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD CONSTRAINT `alumnos_ibfk_1` FOREIGN KEY (`carreraId`) REFERENCES `carreras` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `asignaturas`
--
ALTER TABLE `asignaturas`
  ADD CONSTRAINT `asignaturas_ibfk_1` FOREIGN KEY (`subjectId`) REFERENCES `subjects` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `asignaturas_ibfk_2` FOREIGN KEY (`docenteId`) REFERENCES `docentes` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `exams`
--
ALTER TABLE `exams`
  ADD CONSTRAINT `exams_ibfk_1` FOREIGN KEY (`alumnoId`) REFERENCES `alumnos` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `exams_ibfk_2` FOREIGN KEY (`finalId`) REFERENCES `finals` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `finals`
--
ALTER TABLE `finals`
  ADD CONSTRAINT `finals_ibfk_1` FOREIGN KEY (`asignaturaId`) REFERENCES `asignaturas` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `grades`
--
ALTER TABLE `grades`
  ADD CONSTRAINT `grades_ibfk_1` FOREIGN KEY (`alumnoId`) REFERENCES `alumnos` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `grades_ibfk_2` FOREIGN KEY (`asignaturaId`) REFERENCES `asignaturas` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `subjects`
--
ALTER TABLE `subjects`
  ADD CONSTRAINT `subjects_ibfk_1` FOREIGN KEY (`carreraId`) REFERENCES `carreras` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
