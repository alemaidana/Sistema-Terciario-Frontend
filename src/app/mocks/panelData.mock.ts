import { cardData } from "../models/cardData.interface";

/**
 * -Panel Mocks:
 * On this mocks you can create, edit or delete the content of the
 * data cards displayed on the pages components. They are made using 
 * cardData interface.
 */

export const alumnosPanel: cardData[] = [
    {title: 'Examenes', icon: 'bi bi-person-fill', link: ''},
    {title: 'Asistencias', icon: 'bi bi-journal-check', link: ''},
    {title: 'Blog', icon: 'bi bi-pencil-square', link: ''},
    {title: 'Biblioteca', icon: 'bi bi-book', link: ''},
    {title: 'Desafios', icon: 'bi bi-controller', link: ''},
    {title: 'Documentacion', icon: 'bi bi-file-earmark-spreadsheet-fill', link: ''},
]

export const adminPanel: cardData[] = [
    {title: 'Alumnos', icon: 'bi bi-person-fill', link: '/alumnos'},
    {title: 'Docentes', icon: 'bi bi-person-fill', link: '/docentes'},
    {title: 'Asignaturas', icon: 'bi bi-bookmark-star', link: '/asignaturas'},
    {title: 'Inscripciones', icon: 'bi bi-journal-check', link: ''},
    {title: 'Examenes', icon: 'bi bi-blockquote-right', link: ''},
    {title: 'Asistencias', icon: 'bi bi-check-square', link: ''},
    {title: 'Calificaciones', icon: 'bi bi-file-earmark-richtext', link: ''},
    {title: 'Configuracion', icon: 'bi bi-pc-display-horizontal', link: ''},
]

