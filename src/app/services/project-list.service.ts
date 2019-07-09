import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProjectListService {
  projects = [];

  setProjects(projects: any) {
    this.projects = projects;
  }
  getProjects() {
    return this.projects;
  }
}
