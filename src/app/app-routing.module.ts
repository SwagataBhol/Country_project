
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [{path:"detail/:name", component:DetailComponent},
                         {path:"",component:HomeComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[DetailComponent,HomeComponent]
