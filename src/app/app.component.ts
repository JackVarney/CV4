import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  index: number;
  id = 1;
  headerName = [
    { name: 'Home' },
    { name: 'Info' },
    { name: 'sometihn' },
    { name: 'someyhing else' }
  ]

  constructor(  ) { }

  getID(event) {
    this.id = event;
  }

  getScreenHeight() {
    return 1200;
  }
  
}
