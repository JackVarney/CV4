import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { JumbotronModule } from 'app/components/home/jumbotron/jumbotron.module';

@NgModule({
    declarations: [ HomeComponent ],
    imports: [
        BrowserModule,
        FormsModule,
        JumbotronModule
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule { }

export const homeComponent = HomeComponent;
