import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Asignatura } from 'src/app/models/asignatura.interface';
import { Docente } from 'src/app/models/docente.interface';
import { Final } from 'src/app/models/final.interface';
import { Materia } from 'src/app/models/materias.interface';
import { AsignaturasService } from 'src/app/services/asignaturas/asignaturas.service';
import { DocentesService } from 'src/app/services/docentes/docentes.service';
import { FinalesService } from 'src/app/services/finales/finales.service';
import { MateriasService } from 'src/app/services/materias/materias.service';

@Component({
  selector: 'app-finales-list',
  templateUrl: './finales-list.component.html',
  styleUrls: ['./finales-list.component.css']
})
export class FinalesListComponent {

  listaFinales:Final[] = [];
  listaAsignaturas: Asignatura[] = [];
  listaDocentes: Docente[] = [];
  listaMaterias: Materia[] = [];

  constructor(
    private _finalesService:FinalesService,
    private _asignaturasService: AsignaturasService,
    private _docenteService: DocentesService,
    private _materiaService: MateriasService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getFinales();
    this.getAsignaturas();
    this.getDocentes();
    this.getMaterias();
  }

  getFinales() {
    this._finalesService.getAllFinales().subscribe({
      next: (finales: Final[]) => {
        this.listaFinales = finales;
      },
      error: (error: Error) => {
        console.log(`An error just happened${error.message}`);
        this.toastr.error(
          "No se ha podido cargar los finales, revise su conexion",
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

  deleteFinal(id: number) {
    this._finalesService.deleteFinal(id).subscribe({
      next: () => {
        this.getFinales();
        this.toastr.success(
          "Final eliminado con exito",
          "Administracion Terciario"
        );
      },
      error: (error: Error) => {
        console.log(`An error just happened ${error.message}`);
      },
    });
  }
}
