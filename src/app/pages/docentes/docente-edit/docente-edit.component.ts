import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Docente } from 'src/app/models/docente.interface';
import { DocentesService } from 'src/app/services/docentes/docentes.service';
import { ErrorService } from 'src/app/services/errors/error.service';

@Component({
  selector: 'app-docente-edit',
  templateUrl: './docente-edit.component.html',
  styleUrls: ['./docente-edit.component.css']
})
export class DocenteEditComponent implements OnInit{

  formGroup: FormGroup = new FormGroup({});
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private _docenteService: DocentesService,
    private _errorService: ErrorService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
  }

  ngOnInit(): void {
    this.getDocente(this.id);

    this.formGroup = this.formBuilder.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      matricula: ["", Validators.required],
      dni: ["", Validators.required],
      email: ["", Validators.required],
      f_nac: ["", Validators.required],
      telefono: ["", Validators.required],
      password: ["", Validators.required],
      estado: ["", Validators.required],
    });
  }

  updateDocente() {
    const docente: Docente = {
      nombre: this.formGroup.value.nombre,
      apellido: this.formGroup.value.apellido,
      matricula: this.formGroup.value.matricula,
      dni: this.formGroup.value.dni,
      email: this.formGroup.value.email,
      f_nac: this.formGroup.value.f_nac,
      telefono: this.formGroup.value.telefono,
      password: this.formGroup.value.password,
      estado: this.formGroup.value.estado,
    };

    docente.id = this.id;

    this._docenteService.updateDocente(this.id, docente).subscribe({
      next: () => {
        this.toastr.success(
          "Docente actualizado con exito",
          "Administracion Terciario"
        );
        this.router.navigate(["/docentes"]);
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

  getDocente(id: number) {
    this._docenteService.getDocente(id).subscribe({
      next: (docente: Docente) => {
        this.formGroup.setValue({
          nombre: docente.nombre,
          apellido: docente.apellido,
          matricula: docente.matricula,
          dni: docente.dni,
          email: docente.email,
          f_nac: docente.f_nac,
          telefono: docente.telefono,
          password: docente.password,
          estado: docente.estado,
        });
      },
      error: (event: HttpErrorResponse) => {
        this._errorService.errorMessage(event);
      },
    });
  }

}
