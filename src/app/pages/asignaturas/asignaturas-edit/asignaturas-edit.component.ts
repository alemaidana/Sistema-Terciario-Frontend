import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Asignatura } from "src/app/models/asignatura.interface";
import { Docente } from "src/app/models/docente.interface";
import { Materia } from "src/app/models/materias.interface";
import { AsignaturasService } from "src/app/services/asignaturas/asignaturas.service";
import { DocentesService } from "src/app/services/docentes/docentes.service";
import { ErrorService } from "src/app/services/errors/error.service";
import { MateriasService } from "src/app/services/materias/materias.service";

@Component({
  selector: "app-asignaturas-edit",
  templateUrl: "./asignaturas-edit.component.html",
  styleUrls: ["./asignaturas-edit.component.css"],
})
export class AsignaturasEditComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  id: number;
  listaDocentes: Docente[] = [];
  listaMaterias: Materia[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private _asignaturaService: AsignaturasService,
    private _docenteService: DocentesService,
    private _materiaService: MateriasService,
    private _errorService: ErrorService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
  }

  ngOnInit(): void {
    this.getAsignatura(this.id);
    this.getDocentes();
    this.getMaterias();

    this.formGroup = this.formBuilder.group({
      docente: ["", Validators.required],
      materia: ["", Validators.required],
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

  updateAsignatura() {
    const asignatura: Asignatura = {
      docenteId: this.formGroup.value.docente,
      subjectId: this.formGroup.value.materia,
    };

    asignatura.id = this.id;

    this._asignaturaService.updateAsignatura(this.id, asignatura).subscribe({
      next: () => {
        this.toastr.success(
          "Asignatura actualizada con exito",
          "Administracion Terciario"
        );
        this.router.navigate(["/asignaturas"]);
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

  getAsignatura(id: number) {
    this._asignaturaService.getAsignatura(id).subscribe({
      next: (asignatura: Asignatura) => {
        this.formGroup.setValue({
          materia: asignatura.subjectId,
          docente: asignatura.docenteId,
        });
      },
      error: (event: HttpErrorResponse) => {
        this._errorService.errorMessage(event);
      },
    });
  }
}
