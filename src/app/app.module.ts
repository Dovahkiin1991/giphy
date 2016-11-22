// import './app/rxjs-extensions';
import 'zone.js';
import 'reflect-metadata';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

//add bootstrap
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import {Ng2PaginationModule} from 'ng2-pagination';

import { AppComponent }  from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    Ng2PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
