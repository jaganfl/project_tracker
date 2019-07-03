import { Component, Input, OnInit } from "@angular/core";
import * as moment from 'moment';

@Component({
  selector: "app-cell-editor",
  templateUrl: "./cell-editor.component.html",
  styleUrls: ["./cell-editor.component.scss"]
})
export class CellEditorComponent implements OnInit {
  @Input() start: string;
  @Input() end: string;

  edit = false;
  startDateFormatted: string;
  endDateFormatted: string;

  ngOnInit() {
    if (this.start && this.end) {
      this.startDateFormatted = moment(this.start, 'MM/DD/YYYY').format();      
      this.endDateFormatted = moment(this.end, 'MM/DD/YYYY').format();    
    }
  }
  toggle(){
    this.edit = !this.edit;
  }
  update(){
    this.start = moment(this.startDateFormatted).format('MM/DD/YYYY');
    this.end = moment(this.endDateFormatted).format('MM/DD/YYYY');    
    this.toggle();
  }
}
