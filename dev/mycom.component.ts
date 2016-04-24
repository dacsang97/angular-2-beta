import {Component, OnInit} from 'angular2/core';
import {TestComponent} from "./test.component";

@Component({
    selector : 'mycom',
    templateUrl : 'template/mycom.tpl.html',
    styleUrls : ['src/css/mycom.css'],
    directives : [TestComponent]

})

export class MyComComponent implements OnInit{
    name : string;
    ngOnInit():any {
        this.name = "SangND";
    }


}