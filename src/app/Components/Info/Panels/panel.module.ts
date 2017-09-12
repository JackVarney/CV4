import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Autosize } from 'angular2-autosize/src/autosize.directive';

import { PanelComponent } from './panel.component';
import { PanelService } from './panel.service';
import { EdInputModule } from './edinput/edinput.module';

@NgModule({
  declarations:
  [ PanelComponent,
    Autosize
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MdInputModule,
    BrowserAnimationsModule,
    // my own modules
    PanelWellModule,
    ProgressBarModule,
    EdInputModule
  ],
  exports: [
    PanelComponent
  ],
  providers: [PanelService]
})

export class PanelModule { }
