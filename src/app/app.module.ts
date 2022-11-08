import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneComponent } from './phone/phone.component';
import {FormsModule} from "@angular/forms";
import {phoneService} from "./phone/phone-service.service";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  // imports: [
  //   RouterModule.forRoot([{path: '', component: PhoneComponent}]),
  //   FormsModule
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
