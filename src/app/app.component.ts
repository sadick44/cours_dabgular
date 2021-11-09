import { Component } from '@angular/core';


 interface Person{ name:string, age:number};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  /* name:string = "khalid";
  firstNumber: number = 4;

   sum = (first:number, second:number)=>{
     return first+second;
   } */
  khalid: Person = {name: "khalid", age:25}

   persons: Person[] = [
     this.khalid,
    {name: "sadick", age:25},
    {name: "tom", age:22},
    {name: "motti", age:21},
    {name: "hamit", age:15},
   ]

   constructor(){
     this.khalid.age = 25;
   }

}
