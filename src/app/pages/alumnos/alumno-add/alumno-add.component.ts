import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Alumno } from "src/app/models/alumno.interface";
import { AlumnosService } from "src/app/services/alumnos.service";
import { ErrorService } from "src/app/services/error.service";

@Component({
  selector: "app-alumno-add",
  templateUrl: "./alumno-add.component.html",
  styleUrls: ["./alumno-add.component.css"],
})
export class AlumnoAddComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  titulo: string = "Agregar Alumno";

  constructor(
    private formBuilder: FormBuilder,
    private _alumnoService: AlumnosService,
    private _errorService: ErrorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      legajo: ["", Validators.required],
      dni: ["", Validators.required],
      email: ["", Validators.required],
      telefono: ["", Validators.required],
      password: ["", Validators.required],
      estado: ["", Validators.required],
      carrera: ["", Validators.required],
    });
  }

  addAlumno() {
    const alumno: Alumno = {
      nombre: this.formGroup.value.nombre,
      apellido: this.formGroup.value.apellido,
      legajo: this.formGroup.value.legajo,
      dni: this.formGroup.value.dni,
      email: this.formGroup.value.email,
      telefono: this.formGroup.value.telefono,
      password: this.formGroup.value.password,
      estado: this.formGroup.value.estado,
      carreraId: this.formGroup.value.carrera,
    };

    this._alumnoService.createAlumno(alumno).subscribe({
      next: () => {
        console.log("alumno agregado con exito");
        this.router.navigate(["/alumnos"]);
      },
      error: (event: HttpErrorResponse) => {
        this._errorService.errorMessage(event);
      },
    });
  }
}
