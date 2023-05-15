import { cardData } from "../models/cardData.interface";

/**
 * -Panel Mocks:
 * On this mocks you can create, edit or delete the content of the
 * data cards displayed on the pages components. They are made using 
 * cardData interface.
 */

export const alumnosPanel: cardData[] = [
    {title: 'Examenes', icon: 'bi bi-person-fill'},
    {title: 'Asistencias', icon: 'bi bi-journal-check'},
    {title: 'Blog', icon: 'bi bi-pencil-square'},
    {title: 'Biblioteca', icon: 'bi bi-book'},
    {title: 'Desafios', icon: 'bi bi-controller'},
    {title: 'Documentacion', icon: 'bi bi-file-earmark-spreadsheet-fill'},
]

export const adminPanel: cardData[] = [
    {title: 'Alumnos', icon: 'bi bi-person-fill'},
    {title: 'Docentes', icon: 'bi bi-person-fill'},
    {title: 'Asistencias', icon: 'bi bi-journal-check'},
    {title: 'Calificaciones', icon: 'bi bi-journal-check'},
]

