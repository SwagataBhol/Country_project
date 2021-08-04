

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryCardComponent } from './country-card/country-card.component';
// import { DetailComponent } from './detail/detail.component';
// import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryCardComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
