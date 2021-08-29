import { Component, OnInit } from '@angular/core';
import { SearchDataService } from '../services/search-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user! : any;
  myRepos: any[] = [];

  constructor(private dataServ:SearchDataService) { }

  ngOnInit(): void {
    this.dataServ.getHomeData() .subscribe((response: any)=>{
      this.user = response;
    });
    this.dataServ.getHomeRepos().subscribe((response: any)=>{
      this.myRepos = response;
    })
  }

}
