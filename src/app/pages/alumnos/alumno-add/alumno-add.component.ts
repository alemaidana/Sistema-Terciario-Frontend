import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Alumno } from "src/app/models/alumno.interface";
import { AlumnosService } from "src/app/services/alumnos/alumnos.service";
import { ErrorService } from "src/app/services/errors/error.service";

@Component({
  selector: "app-alumno-add",
  templateUrl: "./alumno-add.component.html",
  styleUrls: ["./alumno-add.component.css"],
})
export class AlumnoAddComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private _alumnoService: AlumnosService,
    private _errorService: ErrorService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      legajo: ["", Validators.required],
      dni: ["", Validators.required],
      f_nac: ["", Validators.required],
      curso: ["", Validators.required],
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
      f_nac: this.formGroup.value.f_nac,
      curso: this.formGroup.value.curso,
      email: this.formGroup.value.email,
      telefono: this.formGroup.value.telefono,
      password: this.formGroup.value.password,
      estado: this.formGroup.value.estado,
      carreraId: this.formGroup.value.carrera,
    };

    this._alumnoService.createAlumno(alumno).subscribe({
      next: () => {
        this.toastr.success(
          "Alumno agregado con exito",
          "Administracion Terciario"
        );
        this.router.navigate(["/alumnos"]);
      },
      error: (event: HttpErrorResponse) => {
        this._errorService.errorMessage(event);
        this.toastr.error(
          "No se ha podido completar la operacion",
          "Administracion Terciario"
        );
      },
    });
  }
}
