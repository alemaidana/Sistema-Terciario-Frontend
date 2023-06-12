//Modules
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
//Components
import { LogInComponent } from "./pages/log-in/log-in.component";
import { HomeComponent } from "./pages/home/home.component";
import { AdminComponent } from "./pages/admin/admin.component";
import { AlumnosListComponent } from "./pages/alumnos/alumnos-list/alumnos.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { AlumnoDetailComponent } from "./pages/alumnos/alumno-detail/alumno-detail.component";
import { AlumnoAddComponent } from "./pages/alumnos/alumno-add/alumno-add.component";
import { AlumnoEditComponent } from "./pages/alumnos/alumno-edit/alumno-edit.component";
import { DocentesListComponent } from "./pages/docentes/docentes-list/docentes-list.component";
import { DocenteDetailComponent } from "./pages/docentes/docente-detail/docente-detail.component";
import { DocenteAddComponent } from "./pages/docentes/docente-add/docente-add.component";
import { DocenteEditComponent } from "./pages/docentes/docente-edit/docente-edit.component";
import { AsignaturasListComponent } from "./pages/asignaturas/asignaturas-list/asignaturas-list.component";
import { AsignaturasAddComponent } from "./pages/asignaturas/asignaturas-add/asignaturas-add.component";
import { AsignaturasEditComponent } from "./pages/asignaturas/asignaturas-edit/asignaturas-edit.component";
//Guards
import { AuthGuard } from "./guards/auth.guard";
import { FinalesListComponent } from "./pages/finales/finales-list/finales-list.component";
import { AsignaturasCorrelativesComponent } from "./pages/asignaturas/asignaturas-correlatives/asignaturas-correlatives.component";
import { AlumnosRegularRecordComponent } from "./pages/alumnos/alumnos-regular-record/alumnos-regular-record.component";
import { ExamenesListComponent } from "./pages/examenes/examenes-list/examenes-list.component";
import { ExamenesExamVoucherComponent } from "./pages/examenes/examenes-exam-voucher/examenes-exam-voucher.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LogInComponent },
  /** Pantallas Principales **/
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "admin", component: AdminComponent, canActivate: [AuthGuard] },
  /** Alumnos **/
  { path: "alumnos", component: AlumnosListComponent, canActivate: [AuthGuard] },
  { path: "alumnos/:id", component: AlumnoDetailComponent, canActivate: [AuthGuard] },
  { path: "alumnos/create/new", component: AlumnoAddComponent, canActivate: [AuthGuard] },
  { path: "alumnos/edit/:id", component: AlumnoEditComponent, canActivate: [AuthGuard] },
  { path: "alumnos/regular-certificate/:id", component: AlumnosRegularRecordComponent, canActivate: [AuthGuard] },
   /** Docentes **/
  { path: "docentes", component: DocentesListComponent, canActivate: [AuthGuard] },
  { path: "docentes/:id", component: DocenteDetailComponent, canActivate: [AuthGuard] },
  { path: "docentes/create/new", component: DocenteAddComponent, canActivate: [AuthGuard] },
  { path: "docentes/edit/:id", component: DocenteEditComponent, canActivate: [AuthGuard] },
   /** Asignaturas **/
  { path: "asignaturas", component: AsignaturasListComponent, canActivate: [AuthGuard] },
  { path: "asignaturas/create/new", component: AsignaturasAddComponent, canActivate: [AuthGuard] },
  { path: "asignaturas/edit/:id", component: AsignaturasEditComponent, canActivate: [AuthGuard] },
  { path: "asignaturas/correlatives", component: AsignaturasCorrelativesComponent, canActivate: [AuthGuard] },
   /** Finales **/
  { path: "finales", component: FinalesListComponent, canActivate: [AuthGuard] },
   /** Examenes **/
   { path: "examenes", component: ExamenesListComponent, canActivate: [AuthGuard] },
   { path: "examenes/examen-voucher/:id", component: ExamenesExamVoucherComponent, canActivate: [AuthGuard] },

  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
