import {Component, EventEmitter} from 'angular2/core';
@Component({
    selector : 'my-input',
    template : `
        <h2>Name :</h2>
        <input type="text" [(ngModel)]="myself.name">
        <br>
        <h2>Age :</h2>
        <input type="text" [(ngModel)]="myself.age">
        <button class="btn-default" (click)="onHobbiesChange(myself)">Submit</button>
    `,
    outputs : ['myHobbies']
})

export class InputComponent {
    myself = {name : '',age :''}
    myHobbies = new EventEmitter<{name: string, age: string}>();
    onHobbiesChange(myself : {name: string, age : string}){
        this.myHobbies.emit(myself);
    }
    
}