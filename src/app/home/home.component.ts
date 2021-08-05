
import { CommonService } from './../common.service';
import { Component, OnInit,DoCheck} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http"



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,DoCheck {
  
 
  regions:Array<string>=['Africa',
                          'Asia',
                          'Americas',
                          'Europe',
                          'Oceania',
                          'Polar',]
  ngOnInit(): void {
  }
  ngDoCheck(){
    this.data=this.data
  }
  data:any
  constructor(private userData:CommonService,private http:HttpClient){
    this.userData.getData().subscribe(use=>
      {
        this.data=use
        console.log("home data",this.data[0].name)
      })
  }
  searchCountry(country:string){
    if(country!==""){
    this.data=[];
    let url=`https:restcountries.eu/rest/v2/name/${country}`
    
    this.http.get(url).subscribe(use=>
      {
        this.data=use 
      })
    
  }
  }
  darkMode(event:any){
    let e=document.querySelector("html")!
    e.classList.toggle("darkMode");
    if(event.target.textContent=="Dark Mode"){
      event.target.textContent="Light Mode"
    }
    else{
      event.target.textContent="Dark Mode"
    }
   
  }
  selectRegion(region:string){
    let ind=this.regions.indexOf(region)
    if(ind>=0){
    this.data=[]
    let url=`https://restcountries.eu/rest/v2/region/${region}`
    
    this.http.get(url).subscribe(use=>
      {
        this.data=use 
      })
    }
  }


}
