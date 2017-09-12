import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/route.module';

import { HomeModule } from './components/home/home.module';
import { InfoModule } from './components/info/info.module';
import { NavModule } from './components/nav/nav.module';
import { CVModule } from './components/cv/cv.module';
import { AboutModule } from './components/about/about.module';
import { FooterModule } from './components/footer/footer.module';

import { GetHeightService } from './service/get-height.service';

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
    InfoModule,
    NavModule,
    CVModule,
    AboutModule,
    FooterModule,
    AppRoutingModule
  ],
  providers: [
    GetHeightService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
