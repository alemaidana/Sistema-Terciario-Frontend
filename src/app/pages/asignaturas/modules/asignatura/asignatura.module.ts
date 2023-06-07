//** Modules **/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AddTokenInterceptor } from 'src/app/utils/add-token.interceptor';

//** Components **/
import { AsignaturasAddComponent } from '../../asignaturas-add/asignaturas-add.component';
import { AsignaturasDetailComponent } from '../../asignaturas-detail/asignaturas-detail.component';
import { AsignaturasEditComponent } from '../../asignaturas-edit/asignaturas-edit.component';
import { AsignaturasListComponent } from '../../asignaturas-list/asignaturas-list.component';
import { AsignaturasTableComponent } from '../../components/asignaturas-table/asignaturas-table.component';

//** Pipes **/
import { GetDatosDocentePipe } from '../../pipes/get-datos-docente.pipe';
import { GetDatosMateriaPipe } from '../../pipes/get-datos-materia.pipe';

@NgModule({
  declarations: [
    AsignaturasListComponent,
    AsignaturasAddComponent,
    AsignaturasEditComponent,
    AsignaturasDetailComponent,
    AsignaturasTableComponent,
    GetDatosDocentePipe,
    GetDatosMateriaPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }]
})
export class AsignaturaModule { }
