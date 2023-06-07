//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Components
import { AlumnoAddComponent } from '../../alumno-add/alumno-add.component';
import { AlumnoDetailComponent } from '../../alumno-detail/alumno-detail.component';
import { AlumnoEditComponent } from '../../alumno-edit/alumno-edit.component';
import { AlumnosListComponent } from '../../alumnos-list/alumnos.component';
import { FormAlumnoAddAndEditComponent } from '../../components/form-alumno-add-and-edit/form-alumno-add-and-edit.component';
import { SingleUserProfileComponent } from '../../components/single-user-profile/single-user-profile.component';
import { GoBackAndCreateBarComponent } from 'src/app/shared/components/go-back-and-create-bar/go-back-and-create-bar.component';

//Pipes
import { GetAlumnoFullNamePipe } from '../../pipes/get-full-name.pipe';
import { GetCarreraPipe } from '../../pipes/get-carrera.pipe';
import { GetEstadoPipe } from '../../pipes/get-estado.pipe';

//Interceptor
import { AddTokenInterceptor } from 'src/app/utils/add-token.interceptor';


@NgModule({
  declarations: [
    GoBackAndCreateBarComponent,
    AlumnosListComponent,
    AlumnoDetailComponent,
    FormAlumnoAddAndEditComponent,
    AlumnoAddComponent,
    AlumnoEditComponent,
    SingleUserProfileComponent,
    GetAlumnoFullNamePipe,
    GetCarreraPipe,
    GetEstadoPipe
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
export class AlumnoModule { }
