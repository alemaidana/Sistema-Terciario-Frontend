import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from 'src/app/models/alumno.interface';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';

@Component({
  selector: 'app-alumnos-regular-record',
  templateUrl: './alumnos-regular-record.component.html',
  styleUrls: ['./alumnos-regular-record.component.css']
})
export class AlumnosRegularRecordComponent implements OnInit{
  
  id: number;
  alumno?: Alumno;
  returnLink: string;

  constructor(
    private _alumnoService: AlumnosService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.returnLink = "/alumnos";
  }

  ngOnInit(): void {
    this.getAlumno(this.id);
  }

  getAlumno(id: number) {
    this._alumnoService.getAlumno(id).subscribe({
      next: (alumno: Alumno) => {
        this.alumno = alumno;
      },
      error: (error: Error) => {
        console.log(error);
      },
    });
  }

}
