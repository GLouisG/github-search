import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import{environment} from 'src/environments/environment'


@Injectable({
  providedIn: 'root'
})

export class SearchDataService {
 
  constructor(private http:HttpClient) {

  }

  getUserData(userName: string):Observable<any>{
    const {urlToken} = environment;
    
   return this.http.get<any>(`https://api.github.com/users/${userName}?access_token=${urlToken}`)
  }
  getRepoData(repoFinder: string):Observable<any>{
    const {urlToken} = environment;
    return this.http.get<any>(`https://api.github.com/search/repositories?q=${repoFinder}&?access_token=${urlToken}`)
  }
  getHomeData(){
    const {urlToken} = environment;
    return this.http.get<any>(`https://api.github.com/users/GLouisG?access_token=${urlToken}`)
  }
}

