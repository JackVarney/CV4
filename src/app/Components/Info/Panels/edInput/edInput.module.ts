import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EdInputComponent } from './edInput.component';
import { EdTableModule } from './edTable/edTable.module';

@NgModule({
    declarations: [EdInputComponent],
    imports: [
        BrowserModule,
        FormsModule,
        MdInputModule,
        EdTableModule
    ],
    exports: [EdInputComponent]
})

export class EdInputModule {  }
