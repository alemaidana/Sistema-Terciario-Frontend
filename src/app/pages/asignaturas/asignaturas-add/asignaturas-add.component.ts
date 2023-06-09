import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Asignatura } from "src/app/models/asignatura.interface";
import { Docente } from "src/app/models/docente.interface";
import { Materia } from "src/app/models/materias.interface";
import { AsignaturasService } from "src/app/services/asignaturas.service";
import { DocentesService } from "src/app/services/docentes.service";
import { ErrorService } from "src/app/services/error.service";
import { MateriasService } from "src/app/services/materias.service";

@Component({
  selector: "app-asignaturas-add",
  templateUrl: "./asignaturas-add.component.html",
  styleUrls: ["./asignaturas-add.component.css"],
})
export class AsignaturasAddComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  listaDocentes: Docente[] = [];
  listaMaterias: Materia[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private _asignaturaService: AsignaturasService,
    private _docenteService: DocentesService,
    private _materiaService: MateriasService,
    private _errorService: ErrorService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
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

  addAsignatura() {
    const asignatura: Asignatura = {
      docenteId: this.formGroup.value.docente,
      subjectId: this.formGroup.value.materia,
    };

    this._asignaturaService.createAsignatura(asignatura).subscribe({
      next: () => {
        this.toastr.success(
          "Asignatura agregada con exito",
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
}
