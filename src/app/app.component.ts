import { Component } from '@angular/core';

import { ScreenHeightService } from './app-screen-height.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  index: number;
  id = 1;
  headerName = [
    {name: 'Home'},
    {name: 'Info'},
    {name: 'sometihn'},
    {name: 'someyhing else'}
  ]

  constructor ( private _screenHeightService: ScreenHeightService ) { }

  getID(event) {
    this.id = this._screenHeightService.getID(event);
  }

  getScreenHeight() {
    return this._screenHeightService.getScreenHeight(this.id);
  }
}
