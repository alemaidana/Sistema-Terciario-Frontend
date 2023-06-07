import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { rutasInternas } from "src/app/mocks/rutasInternas.mock";
import { Alumno } from "src/app/models/alumno.interface";
import { LinksPagina } from "src/app/models/extra/rutasInternas.interface";
import { AlumnosService } from "src/app/services/alumnos.service";

@Component({
  selector: "app-alumnos",
  templateUrl: "./alumnos.component.html",
  styleUrls: ["./alumnos.component.css"],
})
export class AlumnosListComponent implements OnInit {
  alumnos: Alumno[] = [];
  links:LinksPagina = rutasInternas[0].links;

  constructor(
    private _alumnosService: AlumnosService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos() {
    this._alumnosService.getAllAlumnos().subscribe({
      next: (alumnos: Alumno[]) => {
        this.alumnos = alumnos;
      },
      error: (error: Error) => {
        console.log(`An error just happened${error.message}`);
        this.toastr.error(
          "No se ha podido cargar los alumnos, revise su conexion",
          "Administracion Terciario"
        );
      },
    });
  }

  deleteAlumno(id: number) {
    this._alumnosService.deleteAlumno(id).subscribe({
      next: () => {
        this.getAlumnos();
        this.toastr.success(
          "Alumno eliminado con exito",
          "Administracion Terciario"
        );
      },
      error: (error: Error) => {
        console.log(`An error just happened ${error.message}`);
      },
    });
  }
}
