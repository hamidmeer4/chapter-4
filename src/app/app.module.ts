import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Chap4Component } from './chap-4/chap-4.component';
import { HoverHighlightDirective } from './directive/hover-highlight.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { UsdpkrPipe } from './pipes/usdpkr.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Chap4Component,
    HoverHighlightDirective,
    CapitalizePipe,
    UsdpkrPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
