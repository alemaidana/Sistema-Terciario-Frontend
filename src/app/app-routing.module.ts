/**
 * Modules
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/**
 * Components
 */
import { LogInComponent } from './pages/log-in/log-in.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AlumnoDetailComponent } from './pages/alumno-detail/alumno-detail.component';
/**
 * Guards
 */
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LogInComponent
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard]
  },
  {
    path: 'alumnos', component: AlumnosComponent, canActivate: [AuthGuard]
  },
  {
    path: 'alumnos/:id', component: AlumnoDetailComponent, canActivate: [AuthGuard]
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
