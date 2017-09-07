import { Injectable } from '@angular/core';

@Injectable()
export class ScreenHeightService {


    getID(event) {
        return event;
    }

    getScreenHeight(id) {
        console.log('id is: ' + id);
        let a = id + 1;
        let b;

        switch (a) {
            case 1:
                b = 1000;
                break;

            case 2:
                b = 1140;
                break;

            case 3:
                b = 1000;
                break;

            case 4:
                b = 1000;
                break;
        }

        return b;
    }
}