/**
 * -Data interface:
 * These interfaces give us s a blueprint that 
 * contains properties from the Database
 */

export interface Alumno{
    id:number,
    nombre:string,
    apellido:string,
    email:string,
    telefono:string,
    password?:string
}