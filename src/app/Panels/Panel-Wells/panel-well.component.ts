import { Component, Input } from '@angular/core';

import { Panel } from '../panel';

@Component({
    selector: 'app-panel-well',
    templateUrl: './panel-well.component.html',
    styleUrls: ['./panel-well.component.css']        
})

export class PanelWellComponent {
    @Input() 
    index: number; 
    @Input() 
    wellInfo: Panel[];
    
    description: string;

    onHover(){
       this.description = this.wellInfo[this.index].description;
       console.log("HOVER")
    }
}