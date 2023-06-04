import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Alumno } from "src/app/models/alumno.interface";
import { AlumnosService } from "src/app/services/alumnos.service";
import { ErrorService } from "src/app/services/error.service";

@Component({
  selector: "app-alumno-edit",
  templateUrl: "./alumno-edit.component.html",
  styleUrls: ["./alumno-edit.component.css"],
})
export class AlumnoEditComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private _alumnoService: AlumnosService,
    private _errorService: ErrorService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
  }

  ngOnInit(): void {
    this.getAlumno(this.id);

    this.formGroup = this.formBuilder.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      legajo: ["", Validators.required],
      dni: ["", Validators.required],
      email: ["", Validators.required],
      f_nac: ["", Validators.required],
      curso: ["", Validators.required],
      telefono: ["", Validators.required],
      password: ["", Validators.required],
      estado: ["", Validators.required],
      carrera: ["", Validators.required],
    });
  }

  updateAlumno() {
    const alumno: Alumno = {
      nombre: this.formGroup.value.nombre,
      apellido: this.formGroup.value.apellido,
      legajo: this.formGroup.value.legajo,
      dni: this.formGroup.value.dni,
      email: this.formGroup.value.email,
      f_nac: this.formGroup.value.f_nac,
      curso: this.formGroup.value.curso,
      telefono: this.formGroup.value.telefono,
      password: this.formGroup.value.password,
      estado: this.formGroup.value.estado,
      carreraId: this.formGroup.value.carrera,
    };

    alumno.id = this.id;

    this._alumnoService.updateAlumno(this.id, alumno).subscribe({
      next: () => {
        this.toastr.success(
          "Alumno actualizado con exito",
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

  getAlumno(id: number) {
    this._alumnoService.getAlumno(id).subscribe({
      next: (alumno: Alumno) => {
        this.formGroup.setValue({
          nombre: alumno.nombre,
          apellido: alumno.apellido,
          legajo: alumno.legajo,
          dni: alumno.dni,
          email: alumno.email,
          f_nac: alumno.f_nac,
          curso:alumno.curso,
          telefono: alumno.telefono,
          password: alumno.password,
          estado: alumno.estado,
          carrera: alumno.carreraId,
        });
      },
      error: (event: HttpErrorResponse) => {
        this._errorService.errorMessage(event);
      },
    });
  }
}
