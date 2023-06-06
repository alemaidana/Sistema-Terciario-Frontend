import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Docente } from 'src/app/models/docente.interface';
import { DocentesService } from 'src/app/services/docentes.service';

@Component({
  selector: 'app-docentes-list',
  templateUrl: './docentes-list.component.html',
  styleUrls: ['./docentes-list.component.css']
})
export class DocentesListComponent {
  docentes: Docente[] = [];

  constructor(
    private _docentesService: DocentesService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getDocentes();
  }

  getDocentes() {
    this._docentesService.getAllDocentes().subscribe({
      next: (docentes: Docente[]) => {
        this.docentes = docentes;
      },
      error: (error: Error) => {
        console.log(`An error just happened${error}`);
        this.toastr.error(
          "No se ha podido cargar los docentes, revise su conexion",
          "Administracion Terciario"
        );
      },
    });
  }

}
