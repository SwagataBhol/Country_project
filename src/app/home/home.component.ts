
import { CommonService } from './../common.service';
import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
 

  ngOnInit(): void {
  }
  data:any
  constructor(private userData:CommonService){
    this.userData.getData().subscribe(use=>
      {
        this.data=use
        console.log("home data",this.data[0].name)
      })
  }

}
