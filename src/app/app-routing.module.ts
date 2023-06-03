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
//Guards
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LogInComponent,
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "alumnos",
    component: AlumnosListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "alumnos/:id",
    component: AlumnoDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "alumnos/create/new",
    component: AlumnoAddComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "alumnos/edit/:id",
    component: AlumnoEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
