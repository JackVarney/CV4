import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './Home.component';
import { PanelModule } from 'app/components/panels/panel.module';

@NgModule({
    declarations: [ HomeComponent ],
    imports: [
        BrowserModule,
        FormsModule,
        PanelModule,
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule { }

export const homeComponent = HomeComponent;
