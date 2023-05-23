//** Modules **/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//** Components **/
import { AppComponent } from './app.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SingleLinkCardComponent } from './components/single-link-card/single-link-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SingleUserProfileComponent } from './components/single-user-profile/single-user-profile.component';
import { AlumnoDetailComponent } from './pages/alumno-detail/alumno-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
    AdminComponent,
    AlumnosComponent,
    PageNotFoundComponent,
    SingleLinkCardComponent,
    NavBarComponent,
    SingleUserProfileComponent,
    AlumnoDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
