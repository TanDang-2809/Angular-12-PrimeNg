import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {ButtonModule} from 'primeng/button';
import { RippleModule } from 'primeng/ripple';// thêm màu mè cho button
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//menubar
import {MenubarModule} from 'primeng/menubar';//
import { InputTextModule } from 'primeng/inputtext';
//SplitterModule
import {SplitterModule} from 'primeng/splitter';
//card
import {CardModule} from 'primeng/card';
//input text
import {InputTextareaModule} from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenubarModule,
    InputTextModule,
    SplitterModule,
    HttpClientModule,
    CardModule,
    RippleModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
