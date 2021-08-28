import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
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

  getData(userName: string):Observable<any>{
    const {urlToken} = environment;

   return this.http.get<any>(`https://api.github.com/users/${userName}?access_token=${urlToken}`)
  }

}

