import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NavBarComponent } from './nav.component';

// Routing
import { AppRoutingModule } from 'app/routing/route.module';

@NgModule({
    declarations: [
        NavBarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        // My own module
        AppRoutingModule,
    ],
    exports: [
        NavBarComponent
    ]
})

export class NavModule { }
