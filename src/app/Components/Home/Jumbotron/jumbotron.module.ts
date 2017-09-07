import { NgModule } from '@angular/core';

import { JumbotronComponent } from './jumbotron.component';
import { InputModule } from './Jumbotroninputs/input.module';

@NgModule({
    declarations: [ JumbotronComponent ],
    imports: [ InputModule ],
    exports: [ JumbotronComponent ]
})

export class JumbotronModule { }