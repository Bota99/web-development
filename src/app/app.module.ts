import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AddRecordComponent} from './add-record/add-record.component';
import { MyresComponent } from './myres/myres.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    MyresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
