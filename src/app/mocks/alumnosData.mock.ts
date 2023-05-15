import { Alumno } from "../models/data.interface";

/**
 * -Alumnos Data Mock:
 * Just a fake alumnos data to test the table component. You should only use it 
 * for testing.
 */

export const AlumnosData:Alumno[] = [
    {id: 1, nombre:'Alejandro', apellido:'Maidana', email: 'am@isft220.edu.ar', telefono:'4555666'},
    {id: 2, nombre:'Ariel', apellido:'Valcarce', email: 'av@isft220.edu.ar', telefono:'4666333'},
    {id: 3, nombre:'Brian', apellido:'Alcaraz', email: 'ba@isft220.edu.ar', telefono:'47779999'},
    {id: 4, nombre:'Lucia', apellido:'Balverde', email: 'lb@isft220.edu.ar', telefono:'54446666'},
    {id: 5, nombre:'Juana', apellido:'Molina', email: 'jm@isft220.edu.ar', telefono:'43332222'},
]