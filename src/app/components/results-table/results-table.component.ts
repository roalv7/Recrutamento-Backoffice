import {Component, Input,  OnInit  } from '@angular/core';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss']
})
export class ResultsTableComponent implements OnInit {
  
 
  @Input()
  dataSource: any;

  @Input()
  displayedColumns: string[] = [];

  ngOnInit(): void {
    
  }
}
