import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EdInputTextareaInformation } from './edInputTextareaInformation';

@Component({
    selector: 'app-edinput',
    templateUrl: './edInput.component.html',
    styleUrls: ['./edInput.component.css']
})

export class EdInputComponent {
    info: [ EdInput ]
    edInput = EdInputTextareaInformation;
}

export class EdInput {
    qualification: string;
    placeOfStudy: string;
    year: string;
 }