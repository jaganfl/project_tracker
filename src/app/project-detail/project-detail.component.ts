import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddCommentComponent } from "../add-comment/add-comment.component";
import { ProjectListService } from "../services/project-list.service";
import { ActivatedRoute, Router } from "@angular/router";
import * as _ from "lodash";
import { AddPhaseComponent } from "../add-phase/add-phase.component";

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

const DATA = {
  name: "Project 1",
  phases: [
    "Discovery",
    "Design",
    "Development",
    "Testing",
    "UAT",
    "Hypercare",
    "Production",
    "Support"
  ],
  milestones: [
    {
      planned: {
        Discovery: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Design: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Development: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Testing: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        UAT: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Hypercare: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Production: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Support: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        }
      },
      actual: {
        Discovery: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Design: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Development: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Testing: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        UAT: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Hypercare: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Production: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Support: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        }
      },
    },
    {
      planned: {
        Discovery: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Design: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Development: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Testing: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        UAT: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Hypercare: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Production: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Support: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        }
      },
      actual: {
        Discovery: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Design: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Development: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Testing: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        UAT: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Hypercare: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Production: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Support: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        }
      },
    },
    {
      planned: {
        Discovery: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Design: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Development: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Testing: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        UAT: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Hypercare: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Production: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Support: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        }
      },
      actual: {
        Discovery: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Design: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Development: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Testing: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        UAT: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Hypercare: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Production: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        },
        Support: {
          startDate: "05/26/2019",
          endDate: "05/30/2019"
        }
      },
    }
  ],
  issues: []
};

const MILESTONE = {
  planned: {
    Discovery: {
      startDate: "05/26/2019",
      endDate: "05/30/2019"
    },
    Design: {
      startDate: "05/26/2019",
      endDate: "05/30/2019"
    },
    Development: {
      startDate: "05/26/2019",
      endDate: "05/30/2019"
    },
    Testing: {
      startDate: "05/26/2019",
      endDate: "05/30/2019"
    },
    UAT: {
      startDate: "05/26/2019",
      endDate: "05/30/2019"
    },
    Hypercare: {
      startDate: "05/26/2019",
      endDate: "05/30/2019"
    },
    Production: {
      startDate: "05/26/2019",
      endDate: "05/30/2019"
    },
    Support: {
      startDate: "05/26/2019",
      endDate: "05/30/2019"
    }
  },
  actual: {
    Discovery: {
      startDate: "05/26/2019",
      endDate: "05/30/2019"
    },
    Design: {
      startDate: "05/26/2019",
      endDate: "05/30/2019"
    },
    Development: {
      startDate: "05/26/2019",
      endDate: "05/30/2019"
    },
    Testing: {
      startDate: "05/26/2019",
      endDate: "05/30/2019"
    },
    UAT: {
      startDate: "05/26/2019",
      endDate: "05/30/2019"
    },
    Hypercare: {
      startDate: "05/26/2019",
      endDate: "05/30/2019"
    },
    Production: {
      startDate: "05/26/2019",
      endDate: "05/30/2019"
    },
    Support: {
      startDate: "05/26/2019",
      endDate: "05/30/2019"
    }
  },
};

@Component({
  selector: "app-project-detail",
  templateUrl: "./project-detail.component.html",
  styleUrls: ["./project-detail.component.scss"]
})
export class ProjectDetailComponent {
  displayedColumns: string[] = ["phase", "planned", "actual"];
  dataSource = DATA;
  comments = [];
  id: string;
  private sub: any;
  projectList = [];

  constructor(
    public dialog: MatDialog,
    private projectListService: ProjectListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
    });
    this.projectList = this.projectListService.getProjects();
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
    _.remove(projects, project => {
      return project.id === this.id;
    });
    this.router.navigate(["/dashboard"]);
  }

  deletePhase(phase: string) {
    _.remove(this.dataSource.phases, (phaseName: string) => {
      return phaseName === phase;
    });
  }
  addPhase(): void {
    const dialogRef = this.dialog.open(AddPhaseComponent, {
      width: "500px",
      data: {}
    });

    dialogRef.afterClosed().subscribe(name => {
      if (name) {
        this.dataSource.phases.push(name);
        this.dataSource.milestones.forEach((milestone: any)=>{
          milestone.planned[name]= {
            startDate: '',
            endDate: ''
          }
          milestone.actual[name]= {
            startDate: '',
            endDate: ''
          }
        })
      }
    });
  }

  addIssue(){
    const addIssuedialogRef = this.dialog.open(AddCommentComponent, {
      width: "500px",
      data: {}
    });

    addIssuedialogRef.afterClosed().subscribe(issue => {
     if(issue){
      this.dataSource.issues.push(issue);
     } 
    });
  }
  deleteIssue(issue: string) {
    _.remove(this.dataSource.issues, (issueName: string) => {
      return issueName === issue;
    });
  }
  addMilstone() {
    this.dataSource.milestones.push(MILESTONE);
  }
}
