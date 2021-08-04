import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent implements OnInit {
 
  @Input() country:any
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onClick(countryName:string){
    
    this.router.navigate(["detail",countryName])
  }

}

