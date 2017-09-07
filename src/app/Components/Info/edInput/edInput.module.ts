import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EdInputComponent } from './edInput.component';

@NgModule({
    declarations: [EdInputComponent],
    imports: [
        BrowserModule,
        FormsModule,
        MdInputModule
    ],
    exports: [EdInputComponent]
})

export class EdInputModule { }
