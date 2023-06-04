export interface Alumno{
    id?:number,
    nombre:string,
    apellido:string,
    legajo:string,
    dni:string,
    email:string,
    f_nac:Date,
    curso:string,
    telefono:string,
    password:string,
    estado:boolean,
    carreraId:number,
    avatar?:string
}