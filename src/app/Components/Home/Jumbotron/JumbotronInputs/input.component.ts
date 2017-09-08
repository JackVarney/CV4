import { Component } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})

export class InputComponent {
    inputs: InputInformation [] = [
        {name: 'First Name', input: ''},
        {name: 'Surname', input: ''},
        {name: 'Age', input: ''}
    ];
 }

class InputInformation {
    name: string;
    input: string;
}
