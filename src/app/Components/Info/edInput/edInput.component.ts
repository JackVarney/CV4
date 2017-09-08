import { Component, Output, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EdInputTextareaInformation } from './edInputTextareaInformation';

@Component({
    selector: 'app-edinput',
    templateUrl: './edInput.component.html',
    styleUrls: ['./edInput.component.css']
})

export class EdInputComponent {
    edInput = EdInputTextareaInformation;
    userEducation: InputValues[] = [];
    @Output()userOutput = new EventEmitter;

    getInfo() {
        const qual = $('#text0').val().toString();
        const pos = $('#text1').val().toString();
        const year = $('#text2').val().toString();
        this.userEducation.push({qual, pos, year});
        this.userOutput.emit(this.userEducation);
    }
}

class InputValues {
    qual: string;
    pos: string;
    year: string;
}
