import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
import{environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})

export class SearchDataService {
 
  username!: string;
  token = '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';
  
  
  constructor(private http:HttpClient) { 
    this.username = 'GLouisG';

  }
  getUserInfo(){
    const {urlToken} = environment;
    return this.http.get(`https://api.github.com/users/GLouisG?access_token=${urlToken}`);
  }
}
