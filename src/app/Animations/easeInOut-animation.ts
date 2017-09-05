import { trigger, state, style, animate, transition } from '@angular/core';

export const easeInOut = trigger('easeInOut', [
            state('close', style({ opacity: '0' })),
            state('open', style({ opacity: '1' })),
            transition('open => close', animate('400ms ease-in')),
            transition('close => open', animate('400ms ease-out'))
        ]);
