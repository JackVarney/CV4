import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NavBarComponent } from './nav.component';
import { FooterModule } from '../footer/footer.module';

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
        FooterModule,
    ],
    exports: [
        NavBarComponent
    ]
})

export class NavModule { }
