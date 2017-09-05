import { Component, Input } from '@angular/core';

import { Panel } from '../Panels/panel';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.css']
})

export class ProgressBarComponent {
    @Input()
    progress: Panel[];
    @Input()
    index: number;

    getBarLength() {
        return this.progress[this.index].progress / 5;
    }
}

