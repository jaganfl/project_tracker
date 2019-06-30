import { Component, Input, OnInit } from "@angular/core";
import * as moment from 'moment';

@Component({
  selector: "app-cell-editor",
  templateUrl: "./cell-editor.component.html",
  styleUrls: ["./cell-editor.component.scss"]
})
export class CellEditorComponent implements OnInit {
  @Input() dateRange: string;

  edit = false;
  dateFormatted: any;
  startDate: string;
  endDate: string;
  startDateFormatted: string;
  endDateFormatted: string;

  ngOnInit() {
    if (this.dateRange) {
      const dates = this.dateRange.split('-'); 
      this.startDate = dates[0];
      this.endDate = dates[1];
      this.startDateFormatted = moment(this.startDate, 'MM/DD/YYYY').format();      
      this.endDateFormatted = moment(this.endDate, 'MM/DD/YYYY').format();    
    }
  }
  toggle(){
    this.edit = !this.edit;
  }
  update(){
    const startDate = moment(this.startDateFormatted).format('MM/DD/YYYY');
    const endDate = moment(this.endDateFormatted).format('MM/DD/YYYY');
    this.dateRange = startDate + '-' + endDate;
    this.toggle();
  }
}
