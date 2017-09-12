import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EdTableComponent } from './edTable.component';

@NgModule({
    declarations: [ EdTableComponent ],
    imports: [
        MdTableModule,
        BrowserAnimationsModule
     ],
    exports: [ EdTableComponent ]
})

export class EdTableModule {  }
