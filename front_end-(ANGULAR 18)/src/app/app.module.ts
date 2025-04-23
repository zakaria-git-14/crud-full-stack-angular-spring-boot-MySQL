import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import {  provideHttpClient } from '@angular/common/http';
import { CreateEmployeComponent } from './create-employe/create-employe.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';
import { DetailsEmployeComponent } from './details-employe/details-employe.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    CreateEmployeComponent,
    UpdateEmployeComponent,
    DetailsEmployeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
