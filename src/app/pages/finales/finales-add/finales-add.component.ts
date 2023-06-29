import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Asignatura } from 'src/app/models/asignatura.interface';
import { Docente } from 'src/app/models/docente.interface';
import { Final } from 'src/app/models/final.interface';
import { Materia } from 'src/app/models/materias.interface';
import { AsignaturasService } from 'src/app/services/asignaturas/asignaturas.service';
import { DocentesService } from 'src/app/services/docentes/docentes.service';
import { ErrorService } from 'src/app/services/errors/error.service';
import { FinalesService } from 'src/app/services/finales/finales.service';
import { MateriasService } from 'src/app/services/materias/materias.service';
 
@Component({
  selector: 'app-finales-add',
  templateUrl: './finales-add.component.html',
  styleUrls: ['./finales-add.component.css']
})
export class FinalesAddComponent {
 
  formGroup: FormGroup = new FormGroup({});
  listaDocentes: Docente[] = [];
  listaMaterias: Materia[] = [];
  listaAsignaturas: Asignatura[] = [];
 
  constructor(
    private formBuilder: FormBuilder,
    private _finalService: FinalesService,
    private _asignaturasService: AsignaturasService,
    private _docenteService: DocentesService,
    private _materiaService: MateriasService,
    private _errorService: ErrorService,
    private router: Router,
    private toastr: ToastrService
  ) {}
 
  ngOnInit(): void {
    this.getDocentes();
    this.getMaterias();
    this.getAsignaturas();
 
    this.formGroup = this.formBuilder.group({
      asignatura: ["", Validators.required],
      fecha1: ["", Validators.required],
      fecha2: ["", Validators.required],
    });
  }
 
  getDocentes() {
    this._docenteService.getAllDocentes().subscribe({
      next: (docente: Docente[]) => {
        this.listaDocentes = docente;
      },
      error: (error: Error) => {
        console.log(`An error just happened${error.message}`);
        this.toastr.error(
          "No se ha podido cargar las asignaturas, revise su conexion",
          "Administracion Terciario"
        );
      },
    });
  }
 
  getMaterias() {
    this._materiaService.getAllMaterias().subscribe({
      next: (materias: Materia[]) => {
        this.listaMaterias = materias;
      },
      error: (error: Error) => {
        console.log(`An error just happened${error.message}`);
        this.toastr.error(
          "No se ha podido cargar las asignaturas, revise su conexion",
          "Administracion Terciario"
        );
      },
    });
  }
 
  getAsignaturas() {
    this._asignaturasService.getAllAsignaturas().subscribe({
      next: (asignaturas: Asignatura[]) => {
        this.listaAsignaturas = asignaturas;
      },
      error: (error: Error) => {
        console.log(`An error just happened${error.message}`);
        this.toastr.error(
          "No se ha podido cargar las asignaturas, revise su conexion",
          "Administracion Terciario"
        );
      },
    });
  }
 
  addFinal() {
    const final: Final = {
      asignaturaId: this.formGroup.value.asignatura,
      primer_llamado: this.formGroup.value.fecha1,
      segundo_llamado: this.formGroup.value.fecha2,
    };
 
    this._finalService.createFinal(final).subscribe({
      next: () => {
        this.toastr.success(
          "Mesa Examen agregada con exito",
          "Administracion Terciario"
        );
        this.router.navigate(["/finales"]);
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