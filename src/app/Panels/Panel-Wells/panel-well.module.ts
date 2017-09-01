import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PanelWellComponent } from './panel-well.component';
import { PanelService } from '../panel.service';

@NgModule({
    declarations: [ PanelWellComponent ],
    imports: [
        BrowserModule,
        FormsModule,
        MdCheckboxModule,
        BrowserAnimationsModule,        
    ],
    exports: [
        PanelWellComponent
    ],
})

export class PanelWellModule {}