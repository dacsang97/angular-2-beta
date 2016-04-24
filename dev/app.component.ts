import {Component} from 'angular2/core';
import {Puzzle} from "./puzzle/puzzle.component";

@Component({
    selector: 'my-app',
    template: `
        <my-puzzle></my-puzzle>
    `,
    directives : [Puzzle]
})
export class AppComponent {

}