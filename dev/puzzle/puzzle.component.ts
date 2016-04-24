import {Component, OnInit} from 'angular2/core';

@Component({
    selector : "my-puzzle",
    template : `
        <section class="setup"> 
            <h2>Game</h2>
            Enter your name : 
            <input type="text" #name (keyup)="0">
            <br>
        </section>
        <section
            [ngClass]="{
                puzzle : true,
                solved : switch1.value == switch1Num && switch2.value == switch2Num && switch3.value == switch3Num && switch4.value == switch4Num 
            }"
            [ngStyle]="{display : name.value === ''? 'none' : 'block'}"
            >
            <h2>The Puzzle | {{ switch1.value == switch1Num && switch2.value == switch2Num && switch3.value == switch3Num && switch4.value == switch4Num ? 'SOLVE' : 'NOT SOLVE' }}</h2>
            
          
            <p>Ok. Welcome <span class="name">{{name.value}}</span></p>
            <br>
            Switch 1 : 
            <input type="text" #switch1 (keyup)="0"><br>
            Switch 2 : 
            <input type="text" #switch2 (keyup)="0"><br>
            Switch 3 : 
            <input type="text" #switch3 (keyup)="0"><br>
            Switch 4 : 
            <input type="text" #switch4 (keyup)="0"><br>
        </section>
        <h2 [hidden]="switch1.value != switch1Num || switch2.value != switch2Num || switch3.value != switch3Num || switch4.value != switch4Num ">Congratulation {{name.value}}, you did it!</h2>
    `
})

export class Puzzle implements OnInit{
    switch1Num : number =1;
    switch2Num : number =2;
    switch3Num : number =3;
    switch4Num : number =4;
    ngOnInit() {
        this.switch1Num = Math.round(Math.random());
        this.switch2Num = Math.round(Math.random());
        this.switch3Num = Math.round(Math.random());
        this.switch4Num = Math.round(Math.random());
        console.log(this.switch1Num,this.switch2Num,this.switch3Num,this.switch4Num);
    }

}