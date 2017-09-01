import { Component, OnInit, trigger, state, transition, style, animate } from '@angular/core';

import { Panel } from './panel';
import { PanelService } from './panel.service';

@Component({
    selector: 'app-panels',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css'],
    animations: [
        trigger('wellAnimation', [
            state('close', style({ opacity: '0' })),
            state('open', style({ opacity: '1' })),
            transition('open => close', animate('400ms ease-in')),
            transition('close => open', animate('400ms ease-out'))
        ])
    ]
})

export class PanelComponent implements OnInit {
    panels: Panel[];

    constructor(private panelService: PanelService) { }

    ngOnInit() {
        this.getPanels();
    }

    getPanels() {
        this.panelService.getPanels().then(x => this.panels = x);
    }

    onHover(i: number){
        this.panels[i].wellOn = (this.panels[i].wellOn === 'open') ? 'close' : 'open';
    }
};
