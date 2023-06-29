import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-finales-edit',
  templateUrl: './finales-edit.component.html',
  styleUrls: ['./finales-edit.component.css']
})
export class FinalesEditComponent {
 
  formGroup: FormGroup = new FormGroup({});
  listaDocentes: Docente[] = [];
  listaMaterias: Materia[] = [];
  listaAsignaturas: Asignatura[] = [];
  id: number;
 
  constructor(
    private formBuilder: FormBuilder,
    private _finalService: FinalesService,
    private _asignaturasService: AsignaturasService,
    private _docenteService: DocentesService,
    private _materiaService: MateriasService,
    private _errorService: ErrorService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
  }
 
  ngOnInit(): void {
    this.getFinal(this.id);
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
 
  getFinal(id:number){
    this._finalService.getFinales(id).subscribe({
      next: (final: Final) => {
        this.formGroup.setValue({
          asignatura: final.asignaturaId,
          fecha1: final.primer_llamado,
          fecha2: final.segundo_llamado,
        });
      },
      error: (event: HttpErrorResponse) => {
        this._errorService.errorMessage(event);
      },
    });
  }
 
  updateFinal() {
 
    const final: Final = {
      asignaturaId: this.formGroup.value.asignatura,
      primer_llamado: this.formGroup.value.fecha1,
      segundo_llamado: this.formGroup.value.fecha2,
    };
 
    final.id = this.id;
 
    this._finalService.updateFinal(this.id, final).subscribe({
      next: () => {
        this.toastr.success(
          "Final actualizado con exito",
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