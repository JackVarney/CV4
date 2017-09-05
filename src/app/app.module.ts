import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HomeModule } from './components/home/home.module';
import { NavModule } from './components/nav/nav.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // My Own Modules
    HomeModule,
    NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
