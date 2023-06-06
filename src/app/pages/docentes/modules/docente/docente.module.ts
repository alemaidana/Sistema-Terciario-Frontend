//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Components
import { DocenteAddComponent } from '../../docente-add/docente-add.component';
import { DocenteDetailComponent } from '../../docente-detail/docente-detail.component';
import { DocenteEditComponent } from '../../docente-edit/docente-edit.component';
import { DocentesListComponent } from '../../docentes-list/docentes-list.component';
import { DocentesGridComponent } from '../../components/docentes-grid/docentes-grid.component';
import { DocentesSingleProfileComponent } from '../../components/docentes-single-profile/docentes-single-profile.component';

//Pipes
import { GetDocenteFullNamePipe } from '../../pipes/get-docente-full-name.pipe';
import { GetDocenteEstadoPipe } from '../../pipes/get-docente-estado.pipe';

//Interceptor
import { AddTokenInterceptor } from 'src/app/utils/add-token.interceptor';


@NgModule({
  declarations: [
    DocenteAddComponent,
    DocenteDetailComponent,
    DocenteEditComponent,
    DocentesListComponent,
    DocentesGridComponent,
    DocentesSingleProfileComponent,
    GetDocenteFullNamePipe,
    GetDocenteEstadoPipe,
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
export class DocenteModule { }
