import { Component } from '@angular/core';


@Component({
    selector: 'app-edtable',
    templateUrl: 'edTable.component.html'
})

export class EdTableComponent {
    userInfo;

    getUserInfo(event) {
        this.userInfo = event;
        console.log(this.userInfo);
    }
 }
