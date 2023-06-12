//** Modules **/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AlumnoModule } from './pages/alumnos/modules/alumno/alumno.module';
import { DocenteModule } from './pages/docentes/modules/docente/docente.module';
import { AsignaturaModule } from './pages/asignaturas/modules/asignatura/asignatura.module';
import { FinalesModule } from './pages/finales/modules/finales/finales.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//** Components **/
import { AppComponent } from './app.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SingleLinkCardComponent } from './shared/components/single-link-card/single-link-card.component';

//** Interceptor **/
import { AddTokenInterceptor } from './utils/add-token.interceptor';
import { ExamenesModule } from './pages/examenes/modules/examenes/examenes.module';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
    AdminComponent,
    PageNotFoundComponent,
    SingleLinkCardComponent,
 ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AlumnoModule,
    DocenteModule,
    AsignaturaModule,
    FinalesModule,
    ExamenesModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
