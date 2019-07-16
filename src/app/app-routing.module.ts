import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProjectDetailComponent } from "./project-detail/project-detail.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { loginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "project/:id",
        component: ProjectDetailComponent        
      },
      {
        path: "project/:id/settings",
        component: SettingsComponent
      }
    ]
  },
  {
    path: "login",
    component: loginComponent
  },
  { path: "", redirectTo: "/login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
