import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { CellEditorComponent } from "./cell-editor/cell-editor.component";
import { MaterialModule } from './material-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { AddPhaseComponent } from './add-phase/add-phase.component';
import { ProjectMilestoneComponent } from './project-milestone/project-milestone.component';
import { IssueTrackerComponent } from './issue-tracker/issue-tracker.component';
import { loginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectDetailComponent,
    NavbarComponent,
    SidenavComponent,
    CellEditorComponent,
    AddProjectComponent,
    AddPhaseComponent,
    AddCommentComponent,
    ProjectMilestoneComponent,
    IssueTrackerComponent,
    loginComponent,
    SettingsComponent,
    AutoCompleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatNativeDateModule
    
  ],
  providers: [],
  entryComponents: [AddProjectComponent, AddCommentComponent, AddPhaseComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
