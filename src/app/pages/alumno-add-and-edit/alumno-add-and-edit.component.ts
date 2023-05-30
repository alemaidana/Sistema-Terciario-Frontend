import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/data.interface';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-alumno-add-and-edit',
  templateUrl: './alumno-add-and-edit.component.html',
  styleUrls: ['./alumno-add-and-edit.component.css']
})
export class AlumnoAddAndEditComponent implements OnInit{

  formGroup:FormGroup = new FormGroup({});
  titulo:string = 'Agregar Alumno';
  id:number;

  constructor(
    private formBuilder:FormBuilder,
    private _alumnoService:AlumnosService,
    private _errorService:ErrorService,
    private activatedRoute: ActivatedRoute,
    private router:Router)
  {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }


  ngOnInit(): void 
  {
    if(this.id > 0){
      this.titulo = 'Editar Alumno';
      this.getAlumno(this.id);

    }
    
    this.formGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      legajo: ['', Validators.required],
      dni: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      password: ['', Validators.required],
      estado: ['', Validators.required],
      carrera: ['', Validators.required],
    });
  }

  addAlumno()
  {
    const alumno:Alumno = 
    {
      nombre: this.formGroup.value.nombre,
      apellido:this.formGroup.value.apellido,
      legajo:this.formGroup.value.legajo,
      dni:this.formGroup.value.dni,
      email:this.formGroup.value.email,
      telefono:this.formGroup.value.telefono,
      password:this.formGroup.value.password,
      estado:this.formGroup.value.estado,
      carreraId:this.formGroup.value.carrera
    }


    if( this.id > 0 ){

      alumno.id = this.id;

      this._alumnoService.updateAlumno(this.id, alumno).subscribe({
        next: () => {console.log('alumno actualizado')},
        error: (event:HttpErrorResponse) => {
          this._errorService.errorMessage(event);
       }
      });

    }else{

      this._alumnoService.createAlumno(alumno).subscribe({
        next: () => { 
          console.log('alumno agregado con exito');
          this.router.navigate(['/alumnos']);
        },
        error: (event:HttpErrorResponse) => {
          this._errorService.errorMessage(event);
       }
      });

    }
  }

  getAlumno(id:number)
  {
    this._alumnoService.getAlumno(id).subscribe({
      next: (alumno:Alumno) => { 

        this.formGroup.setValue({
          nombre: alumno.nombre,
          apellido:alumno.apellido,
          legajo:alumno.legajo,
          dni:alumno.dni,
          email:alumno.email,
          telefono:alumno.telefono,
          password:alumno.password,
          estado:alumno.estado,
          carrera:alumno.carreraId
        })

      },
      error: (event:HttpErrorResponse) => {
        this._errorService.errorMessage(event);}
    })
  }


}
