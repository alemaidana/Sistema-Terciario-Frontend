import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno.interface';
import { Asignatura } from 'src/app/models/asignatura.interface';
import { Docente } from 'src/app/models/docente.interface';
import { Examen } from 'src/app/models/examen.interface';
import { Final } from 'src/app/models/final.interface';
import { Materia } from 'src/app/models/materias.interface';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { AsignaturasService } from 'src/app/services/asignaturas/asignaturas.service';
import { ExamenesService } from 'src/app/services/examenes/examenes.service';
import { FinalesService } from 'src/app/services/finales/finales.service';
import { MateriasService } from 'src/app/services/materias/materias.service';

@Component({
  selector: 'app-examenes-list',
  templateUrl: './examenes-list.component.html',
  styleUrls: ['./examenes-list.component.css']
})
export class ExamenesListComponent {

  listaExamenes: Examen[] = [];
  listaFinales: Final[] = [];
  listaAlumnos: Alumno[] = [];
  listaAsignaturas: Asignatura[] = [];
  listaDocentes: Docente[] = [];
  listaMaterias: Materia[] = [];

  constructor(
    private _examenesService: ExamenesService,
    private _asignaturasService: AsignaturasService,
    private _alumnosService: AlumnosService,
    private _materiaService: MateriasService,
    private _finalesService: FinalesService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getExamenes();
    this.getFinales();
    this.getAsignaturas();
    this.getAlumnos();
    this.getMaterias();
  }

  getExamenes() {
    this._examenesService.getAllExamenes().subscribe({
      next: (examen: Examen[]) => {
        this.listaExamenes = examen;
      },
      error: (error: Error) => {
        console.log(`An error just happened${error.message}`);
        this.toastr.error(
          "No se ha podido cargar los examenes, revise su conexion",
          "Administracion Terciario"
        );
      },
    });
  }

  getFinales() {
    this._finalesService.getAllFinales().subscribe({
      next: (final: Final[]) => {
        this.listaFinales = final;
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

  
  getAlumnos() {
    this._alumnosService.getAllAlumnos().subscribe({
      next: (alumno: Alumno[]) => {
        this.listaAlumnos = alumno;
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

  deleteExamen(id: number) {
    this._examenesService.deleteExamen(id).subscribe({
      next: () => {
        this.getExamenes();
        this.toastr.success(
          "Examen eliminado con exito",
          "Administracion Terciario"
        );
      },
      error: (error: Error) => {
        console.log(`An error just happened ${error.message}`);
      },
    });
  }

}
