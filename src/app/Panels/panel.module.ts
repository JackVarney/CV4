import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PanelComponent } from './panel.component';
import { PanelService } from './panel.service';

import { MdRadioModule, MdInputModule, MdTooltipModule, MdCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({    
  declarations: [PanelComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdInputModule,
    MdRadioModule,
    MdTooltipModule,
    MdCheckboxModule,
    BrowserAnimationsModule
  ],
exports: [
    PanelComponent
],
  providers: [ PanelService ]
})

export class PanelModule { }
