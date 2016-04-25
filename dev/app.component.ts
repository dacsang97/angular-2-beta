import {Component} from 'angular2/core';
import {InputComponent} from "./input.component";

@Component({
    selector: 'my-app',
    template: `
       <my-input (myHobbies)="onSubmit($event)"></my-input>
       Name : {{myself.name}}
       <br>
       Age : {{myself.age}}
    `,
    directives : [InputComponent]
})
export class AppComponent {
    myself = {name : '', age : ''};
    onSubmit(myself : {name: string, age : string}){
        this.myself = myself;
    }
}