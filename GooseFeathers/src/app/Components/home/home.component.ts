import { Component } from '@angular/core';
import { StringingTableComponent } from '../stringing-table/stringing-table.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StringingTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
