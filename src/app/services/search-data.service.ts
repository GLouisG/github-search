import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import 'rxjs/add/operator/map';
import{environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {
 
  username!: string;

  constructor(private http:HttpClient) { }
}
