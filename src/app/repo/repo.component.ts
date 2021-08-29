import { Component, OnInit,Input } from '@angular/core';
import { SearchDataService } from '../services/search-data.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  
  @Input() repos!: any[];
  
  constructor(private dataServices:SearchDataService) { }
 
  ngOnInit(): void {
   
  }

}
