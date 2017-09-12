import { Component, Input } from '@angular/core';

import { Panel } from '../panel';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.css']
})

export class ProgressBarComponent {
    @Input()
    panel: Panel[];
    @Input()
    index: number;

    getBarLength() {
        return this.panel[this.index].inputText.length / 3;
    }

    getBarClass() {
        let a: number = this.panel[this.index].inputText.length / 3;
        let b: string;
        if (a > 100) {
            a = 100;
        }

        if (a >= 0 && a <= 60) {
            b = 'progress-bar progress-bar-warning';
        }

        if (a >= 60.1 && a <= 80) {
            b = 'progress-bar progress-bar-info';
        }

        if (a >= 80.1 && a <= 100) {
            b = 'progress-bar progress-bar-danger';
        }
        return b;
    }
}

