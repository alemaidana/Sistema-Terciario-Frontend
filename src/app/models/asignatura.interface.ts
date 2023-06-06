import { Docente } from "./docente.interface";
import { Materia } from "./materias.interface";

export interface Asignatura {
    id?: number;
    subjectId?:Materia,
    docenteId?:Docente
}