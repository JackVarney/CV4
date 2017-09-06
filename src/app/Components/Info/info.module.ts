import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InfoComponent } from './info.component';
import { PanelModule } from 'app/components/info/panels/panel.module';

@NgModule({
    declarations: [ InfoComponent ],
    imports: [
        BrowserModule,
        FormsModule,
        PanelModule
    ],
    exports: [
        InfoComponent
    ]
})

export class InfoModule { }

export const infoComponent = InfoComponent;
