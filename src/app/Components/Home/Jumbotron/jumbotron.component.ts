import { Component } from '@angular/core';

@Component({
    selector: 'app-jumbotron',
    templateUrl: 'jumbotron.component.html',
    styleUrls: ['jumbotron.component.css']
})

export class JumbotronComponent {
    jumboMessage = {
        title: 'Welcome To My CV Creator',
        p: 'Enter Your Details Below'
    }
}
