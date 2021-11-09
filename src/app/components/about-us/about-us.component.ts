import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/person';
import { Card } from '../../model/Card';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  khalid: Person = {name: "khalid", age:25}

   persons: Person[] = [
    {name: "sadick", age:25},
    {name: "tom", age:22},
    {name: "motti", age:21},
   ]

   personUrl: string ="https://material.angular.io/assets/img/examples/shiba2.jpg";
   data:Card[] = [];
   ngOnInit(){
     this.data  = this.persons.map((person)=>{
       return {title:person.name, subTitle:person.age+' ans', image: this.personUrl};
     });
   }
}
