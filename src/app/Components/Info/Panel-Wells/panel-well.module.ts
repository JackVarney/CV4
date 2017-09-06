import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PanelWellComponent } from './panel-well.component';

@NgModule({
    declarations: [ PanelWellComponent ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    exports: [
        PanelWellComponent
    ],
})

export class PanelWellModule { }
