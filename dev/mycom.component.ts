import {Component} from 'angular2/core';

@Component({
    selector : 'mycom',
    template : `
        My name is <span [style.color]="inputElement.value=== 'yes' ? 'red' : 'black'">{{ name }}</span> and this is my first Angular 2 App. <span [class.is-awesome]="inputElement.value === 'yes'">It is so awesome.</span>
        <br>
        <br>
        Is it awesome? 
        <input type="text" #inputElement (keyup)="0">
        <button [disabled]="inputElement.value !== 'yes'">Only enable if 'yes' was entered</button>
    `,
    styleUrls : ['src/css/mycom.css']

})

export class MyComComponent {
    name = "SangND";
}