import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { rutasInternas } from 'src/app/mocks/rutasInternas.mock';
import { Docente } from 'src/app/models/docente.interface';
import { LinksPagina } from 'src/app/models/extra/rutasInternas.interface';
import { DocentesService } from 'src/app/services/docentes/docentes.service';

@Component({
  selector: 'app-docentes-list',
  templateUrl: './docentes-list.component.html',
  styleUrls: ['./docentes-list.component.css']
})
export class DocentesListComponent {
  docentes: Docente[] = [];
  links:LinksPagina = rutasInternas[1].links;

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
