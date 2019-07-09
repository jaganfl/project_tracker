import { Component, OnInit } from '@angular/core';
import { ProjectListService } from '../services/project-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  projectList = []
  constructor(
    
    private projectListService: ProjectListService
  ) {}
  ngOnInit() {
    this.projectList = this.projectListService.getProjects();
  }
}
