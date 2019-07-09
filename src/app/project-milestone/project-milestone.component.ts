import { Component, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddCommentComponent } from "../add-comment/add-comment.component";
import { ProjectListService } from "../services/project-list.service";
import { ActivatedRoute, Router } from "@angular/router";
import * as _ from "lodash";
import { AddPhaseComponent } from "../add-phase/add-phase.component";

@Component({
  selector: "app-project-milestone",
  templateUrl: "./project-milestone.component.html",
  styleUrls: ["./project-milestone.component.scss"]
})
export class ProjectMilestoneComponent {
  @Input() phases: any;
  @Input() milestone: any;
  @Input() index: number;

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
