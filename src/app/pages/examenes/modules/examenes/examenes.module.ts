//** Modules **/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//** Components **/
import { ExamenesAddComponent } from '../../examenes-add/examenes-add.component';
import { ExamenesDetailComponent } from '../../examenes-detail/examenes-detail.component';
import { ExamenesEditComponent } from '../../examenes-edit/examenes-edit.component';
import { ExamenesExamVoucherComponent } from '../../examenes-exam-voucher/examenes-exam-voucher.component';
import { ExamenesListComponent } from '../../examenes-list/examenes-list.component';

//** Pipes **/

//** Interceptor **/
import { AddTokenInterceptor } from 'src/app/utils/add-token.interceptor';



@NgModule({
  declarations: [
    ExamenesListComponent,
    ExamenesAddComponent,
    ExamenesEditComponent,
    ExamenesDetailComponent,
    ExamenesExamVoucherComponent,
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
export class ExamenesModule { }
