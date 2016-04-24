import {Component} from 'angular2/core';
import {MyComComponent} from "./mycom.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>The sample</h1>
        <h2>Now go to second component</h2>
        <mycom></mycom>
    `,
    directives : [MyComComponent]
})
export class AppComponent {
}