import { Component, Output, EventEmitter } from '@angular/core';

import { NavBar } from './nav';
import { NAVBAR } from './nav-info';

@Component({
    selector: 'app-navbar',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.component.css']
})

export class NavBarComponent{
    navInfo: NavBar [] = NAVBAR;
    @Output() idNumber = new EventEmitter();

    onclick(id){
        this.idNumber.emit(id);
    }
 }
