import { Component, OnInit } from '@angular/core';
import { SearchDataService } from '../services/search-data.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchService : SearchDataService) { }
  
  ngOnInit(): void {
  }

}
