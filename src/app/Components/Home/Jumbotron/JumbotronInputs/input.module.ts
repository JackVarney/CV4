import { NgModule } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { InputComponent } from './input.component';

@NgModule({
    declarations: [ InputComponent ],
    imports: [
        MdInputModule,
        BrowserAnimationsModule,
        FormsModule
    ],
    exports: [ InputComponent ]
})

export class InputModule { }
