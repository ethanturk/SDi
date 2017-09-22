import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from "./dataservices/data.service";

import { AppComponent } from './app.component';
import { DataGrid } from './data-grid.component';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
      AppComponent,
      DataGrid
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
