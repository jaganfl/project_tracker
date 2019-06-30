import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddCommentComponent } from "../add-comment/add-comment.component";
import { ProjectListService } from "../services/project-list.service";
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';    

export interface PeriodicElement {
  planned: string;
  phase: string;
  actual: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    phase: "Discovery",
    planned: "05/26/2019-05/29/2019",
    actual: "05/30/2019-06/02/2019"
  },
  {
    phase: "Design",
    planned: "05/26/2019-05/29/2019",
    actual: "05/30/2019-06/02/2019"
  },
  {
    phase: "Development",
    planned: "05/26/2019-05/29/2019",
    actual: "05/30/2019-06/02/2019"
  },
  {
    phase: "Testing",
    planned: "05/26/2019-05/29/2019",
    actual: "05/30/2019-06/02/2019"
  },
  {
    phase: "UAT",
    planned: "05/26/2019-05/29/2019",
    actual: "05/30/2019-06/02/2019"
  },
  {
    phase: "Hypercare",
    planned: "05/26/2019-05/29/2019",
    actual: "05/30/2019-06/02/2019"
  },
  {
    phase: "Production",
    planned: "05/26/2019-05/29/2019",
    actual: "05/30/2019-06/02/2019"
  },
  {
    phase: "Support",
    planned: "05/26/2019-05/29/2019",
    actual: "05/30/2019-06/02/2019"
  }
];

@Component({
  selector: "app-project-detail",
  templateUrl: "./project-detail.component.html",
  styleUrls: ["./project-detail.component.scss"]
})
export class ProjectDetailComponent {
  displayedColumns: string[] = ["phase", "planned", "actual"];
  dataSource = ELEMENT_DATA;
  comments = [];
  id: string;
  private sub: any;

  constructor(
    public dialog: MatDialog,
    private projectListService: ProjectListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  openCommentDialog(): void {
    const dialogRef = this.dialog.open(AddCommentComponent, {
      width: "250px",
      data: {}
    });

    dialogRef.afterClosed().subscribe(comment => {
      this.comments.push(comment);
    });
  }
  delete() {
    const projects = this.projectListService.getProjects();    
    _.remove(projects, (project)=>{
      return project.id === this.id;
    });
    this.router.navigate(["/dashboard"]);
  }
}
