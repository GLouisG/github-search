import { Component, OnInit } from '@angular/core';
import { SearchDataService } from '../services/search-data.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users!: any;
  repos: any [] = [];

  constructor(private searchService : SearchDataService) {
   
   }
  ngOnInit(): void {
   
  }
  search(query: string){
      this.searchService.getUserData(query).subscribe((data) => {
      this.users=data;
    })
      this.searchService.getRepoData(query).subscribe((result) => {
      console.log(result);  
      this.repos=result.items;  
    })
    }
  

}
