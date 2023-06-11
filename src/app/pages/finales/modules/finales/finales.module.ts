//** Modules **/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from 'src/app/app-routing.module';

//** Components **/
import { FinalesListComponent } from '../../finales-list/finales-list.component';
import { FinalesAddComponent } from '../../finales-add/finales-add.component';
import { FinalesEditComponent } from '../../finales-edit/finales-edit.component';
import { FinalesDetailComponent } from '../../finales-detail/finales-detail.component';

//** Pipes **/
import { GetCarreraPipe } from '../../pipes/get-carrera.pipe';
import { GetCorreoDocentePipe } from '../../pipes/get-correo-docente.pipe';
import { GetMatriculaDocentePipe } from '../../pipes/get-matricula-docente.pipe';
import { GetNombreDocentePipe } from '../../pipes/get-nombre-docente.pipe';
import { GetMateriaPipe } from '../../pipes/get-materia.pipe';

//** Interceptor **/
import { AddTokenInterceptor } from 'src/app/utils/add-token.interceptor';


@NgModule({
  declarations: [
    FinalesListComponent,
    FinalesAddComponent,
    FinalesEditComponent,
    FinalesDetailComponent,
    GetNombreDocentePipe,
    GetMatriculaDocentePipe,
    GetCorreoDocentePipe,
    GetCarreraPipe,
    GetMateriaPipe,
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
export class FinalesModule { }
