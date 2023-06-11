import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Docente } from 'src/app/models/docente.interface';
import { DocentesService } from 'src/app/services/docentes/docentes.service';

@Component({
  selector: 'app-docente-detail',
  templateUrl: './docente-detail.component.html',
  styleUrls: ['./docente-detail.component.css']
})
export class DocenteDetailComponent {

  id: number;
  docente?: Docente;
  returnLink: string;

  constructor(
    private _docenteService: DocentesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.returnLink = "/docentes";
  }

  ngOnInit(): void {
    this.getDocente(this.id);
  }

  getDocente(id: number) {
    this._docenteService.getDocente(id).subscribe({
      next: (docente: Docente) => {
        this.docente = docente;
      },
      error: (error: Error) => {
        console.log(error);
      },
    });
  }

}
