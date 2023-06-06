import { Component } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Asignatura } from "src/app/models/asignatura.interface";
import { Docente } from "src/app/models/docente.interface";
import { Materia } from "src/app/models/materias.interface";
import { AsignaturasService } from "src/app/services/asignaturas.service";
import { DocentesService } from "src/app/services/docentes.service";
import { MateriasService } from "src/app/services/materias.service";

@Component({
  selector: "app-asignaturas-list",
  templateUrl: "./asignaturas-list.component.html",
  styleUrls: ["./asignaturas-list.component.css"],
})
export class AsignaturasListComponent {
  asignaturas: Asignatura[] = [];
  docente!: Docente;
  materia!: Materia;
  fullNames: string[] = [];
  materias: string[] = [];

  constructor(
    private _asignaturasService: AsignaturasService,
    private _docenteService: DocentesService,
    private _materiaService: MateriasService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAsignaturas();
    console.log(this.fullNames);
    console.log(this.materias);
  }

  getAsignaturas() {
    this._asignaturasService.getAllAsignaturas().subscribe({
      next: (asignaturas: Asignatura[]) => {
        this.asignaturas = asignaturas;

        asignaturas.forEach((asignatura) => {
          this._docenteService
            .getDocente(Number(asignatura.docenteId))
            .subscribe({
              next: (d: Docente) => {
                this.docente = d;
                this.fullNames.push(
                  this.docente.nombre + " " + this.docente.apellido
                );
              },
            });

          this._materiaService
            .getMateria(Number(asignatura.subjectId))
            .subscribe({
              next: (m: Materia) => {
                this.materia = m;
                this.materias.push(this.materia.nombre);
              },
            });
        });
      },
      error: (error: Error) => {
        console.log(`An error just happened${error}`);
        this.toastr.error(
          "No se ha podido cargar las asignaturas, revise su conexion",
          "Administracion Terciario"
        );
      },
    });
  }

  deleteAsignatura(id: number) {
    this._asignaturasService.deleteAsignatura(id).subscribe({
      next: () => {
        this.getAsignaturas();
        this.toastr.success(
          "Asignatura eliminada con exito",
          "Administracion Terciario"
        );
      },
      error: (error: Error) => {
        console.log(`An error just happened ${error.message}`);
      },
    });
  }
}
