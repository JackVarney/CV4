import { Component, OnInit, OnChanges, trigger, state, transition, style, animate } from '@angular/core';

import { Panel } from './panel';
import { PanelService } from './panel.service';
import { easeInOut } from 'app/animations/easeInOut-animation';



@Component({
    selector: 'app-panels',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css'],
    animations: [
        easeInOut,
    ]
})

export class PanelComponent implements OnInit {
    panels: Panel[];
    showWell: boolean;
    constructor(private panelService: PanelService) { }


    ngOnInit() {
        this.getPanels();
    }
    getPanels() {
        this.panelService.getPanels().then(x => this.panels = x);
    }

    onHover(i: number) {
        if (!this.showWell) {
            this.panels[i].wellOn = (this.panels[i].wellOn === 'open') ? 'close' : 'open';
        }
    }

    maintainWell(i: number) {
        if (this.panels[i].inputText.length > 0) {
            this.panels[i].wellOn = 'open';
            this.showWell = true;
        } else {
            this.panels[i].wellOn = 'close';
            this.showWell = false;
        }
    }
};
