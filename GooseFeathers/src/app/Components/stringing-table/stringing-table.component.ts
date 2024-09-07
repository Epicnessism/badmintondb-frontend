import {Component, OnInit} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {StringingService} from "../../Services/stringing.service";
import {Stringing} from "../../interfaces/Stringing.model";

@Component({
  selector: 'app-stringing-table',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './stringing-table.component.html',
  styleUrl: './stringing-table.component.scss'
})
export class StringingTableComponent implements OnInit {

  tableData: Stringing[] = [];

  constructor(private stringingService: StringingService) {
  }

  displayedColumns: string[] = ['owner', 'requestedTimestamp', 'price', 'status', 'lastUpdatedTimestamp', 'completedTimestamp', 'stringingId'];
  dataSource: MatTableDataSource<Stringing> = new MatTableDataSource(this.tableData);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); //todo this only filters on top-level values i think...not nested values
  }

  ngOnInit(): void {
    this.stringingService.getStringingData().subscribe( data => {
      console.log(data)
      console.log(data.stringingResponseList)
      this.tableData = data.stringingResponseList
      this.dataSource = new MatTableDataSource(this.tableData);
    })
  }
}
