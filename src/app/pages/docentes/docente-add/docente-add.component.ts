import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Docente } from 'src/app/models/docente.interface';
import { DocentesService } from 'src/app/services/docentes.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-docente-add',
  templateUrl: './docente-add.component.html',
  styleUrls: ['./docente-add.component.css']
})
export class DocenteAddComponent implements OnInit{

  formGroup: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private _docenteService: DocentesService,
    private _errorService: ErrorService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      matricula: ["", Validators.required],
      dni: ["", Validators.required],
      f_nac: ["", Validators.required],
      email: ["", Validators.required],
      telefono: ["", Validators.required],
      password: ["", Validators.required],
      estado: ["", Validators.required],
    });
  }

  addDocente() {
    const docente: Docente = {
      nombre: this.formGroup.value.nombre,
      apellido: this.formGroup.value.apellido,
      matricula: this.formGroup.value.matricula,
      dni: this.formGroup.value.dni,
      f_nac: this.formGroup.value.f_nac,
      email: this.formGroup.value.email,
      telefono: this.formGroup.value.telefono,
      password: this.formGroup.value.password,
      estado: this.formGroup.value.estado,
    };

    this._docenteService.createDocente(docente).subscribe({
      next: () => {
        this.toastr.success(
          "Docente agregado con exito",
          "Administracion Terciario"
        );
        this.router.navigate(["/docente"]);
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
