import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouteModule } from 'app/Routing/route.module';

import { NavBarComponent } from './nav.component';

@NgModule({
    declarations: [
        NavBarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouteModule
    ],
    exports: [
        NavBarComponent
    ]
})

export class NavModule { }
