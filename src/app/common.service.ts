
import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
  getData(){
    let url="https://restcountries.eu/rest/v2/all"
    return this.http.get(url)

  }
}
