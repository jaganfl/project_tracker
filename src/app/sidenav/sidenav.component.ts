import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddProjectComponent } from "../add-project/add-project.component";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { ProjectListService } from "../services/project-list.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent implements OnInit {
  projectList: any;
  id: string;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private projectListService: ProjectListService
  ) {}

  ngOnInit() {
    this.projectList = this.projectListService.getProjects();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddProjectComponent, {
      width: "250px",
      data: {}
    });

    dialogRef.afterClosed().subscribe(name => {
      if (name) {
        this.projectList.push({
          name,
          id: name
        });
        this.id = name;
        this.router.navigate(["/dashboard/project", name]);
        this.projectListService.setProjects(this.projectList);
      }
    });
  }
}
