import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CVComponent } from './cv.component';

@NgModule({
    declarations: [ CVComponent ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        CVComponent
    ]
})

export class CVModule { }

export const cvComponent = CVComponent;
