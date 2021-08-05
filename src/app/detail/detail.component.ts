
import { CommonService } from './../common.service';
import { Component, OnInit,Input } from '@angular/core';
import{ActivatedRoute} from '@angular/router'
import{Router} from '@angular/router'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  
  countryDitails:any=[]//data from services
  countryName:any
  countryArray:any
  

  constructor(private route:ActivatedRoute,private userData:CommonService,private router:Router) { 
    this.userData.getData().subscribe(data=>
      {
        this.countryDitails=data
        // console.log(this.countryDitails)
        
        
      })
  }
  
  ngOnInit(): void {
    
    let details=this.route.snapshot.paramMap.get('name')
    this.countryName=details

  }
  back(){
    this.router.navigate([''])
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

}
