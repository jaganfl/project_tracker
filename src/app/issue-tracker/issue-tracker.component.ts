import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddCommentComponent } from "../add-comment/add-comment.component";
import { ProjectListService } from "../services/project-list.service";
import { ActivatedRoute, Router } from "@angular/router";
import * as _ from "lodash";
import { AddPhaseComponent } from "../add-phase/add-phase.component";

@Component({
  selector: "app-issue-tracker",
  templateUrl: "./issue-tracker.component.html",
  styleUrls: ["./issue-tracker.component.scss"]
})
export class IssueTrackerComponent {}
