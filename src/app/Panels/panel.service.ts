import { Injectable } from '@angular/core';

import { Panel } from './panel';
import { PANELS } from './panel-info';

@Injectable()
export class PanelService {
    getPanels(): Promise<Panel[]>   {
        return Promise.resolve(PANELS);
    }
};
