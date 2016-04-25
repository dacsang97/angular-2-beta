import {Component} from 'angular2/core';
import EventEmitter = protractor.EventEmitter;
@Component({
    selector : 'my-confirm',
    template : `
        <h1> Check your submit </h1>
        <p>Your name is <span class="highlight">{{myself.name}}</span>. You're <span class="highlight">{{myself.age}}</span> years old</p>
        <div>
            <label for="name">Your Name</label>
            <input type="text" id="name" [(ngModel)]="myself.name" (keyup)="onKeyup()">
            <br>
            <label for="age">Your Age</label>
            <input type="text" id="age" [(ngModel)]="myself.age" (keyup)="onKeyup()">
        </div>
        <br>
        <br>
        <div>Filled out : {{isFilled ? 'YES' : 'NO'}}</div>
        <div>Valide  {{isValid ? 'YES' : 'NO'}}</div>
        <button [disabled]="!isValid" class="btn" (click)="onConfirm()">Submit</button>
    `
})

export class ConfirmComponent {
    myself = {name:'', age:''};
    isFilled = false;
    isValid = false;
    confirmed = new EventEmitter<{name :string, age : string}>();
    onKeyup(){
        if (this.myself.name!=''&& this.myself.age!='')
        {
            this.isFilled = true;
        }
        else
        {
            this.isFilled = false;
        }

        if (this.myself.name!=''&& /^\d+$/.test(this.myself.age))
        {
            this.isValid = true;
        }
        else
        {
            this.isValid = false;
        }
    }

    onConfirm(){
        this.confirmed.emit(this.myself);
    }

}