import { Component, OnInit } from '@angular/core';

import { Panel } from './panel';
import { PanelService } from './panel.service';

@Component({
    selector: 'app-panels',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css']
})

export class PanelComponent implements OnInit {
    panels: Panel[];

    constructor(private panelService: PanelService) {}

    ngOnInit() {
        this.getPanels();
    }

    getPanels() {
        this.panelService.getPanels().then(panel => this.panels = panel);
    }
};
