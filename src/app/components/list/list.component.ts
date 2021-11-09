import { Component, Input, OnInit } from '@angular/core';

import { Person } from '../../model/person';
import { Product } from '../../model/product';
import { Card } from '../../model/Card';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit{
  @Input() data : (Person | Product )[];
  displayData: Card[] = [];
  personUrl: string ="https://material.angular.io/assets/img/examples/shiba2.jpg";

  constructor(){
    this.data = []
  }

  ngOnInit(){
    this.displayData = this.data.map((datum) =>{
      let cardData = {title:"", subTitle:"", image:""};
      cardData.title = datum.name;
      
      if(datum.hasOwnProperty('price')){
        datum = <Product> datum;
        cardData.subTitle = datum.price + ' euros';
        cardData.image = datum.picture;
      }
      else{
        datum = <Person> datum;
        cardData.subTitle = datum.age +" ans";
        cardData.image = this.personUrl;
      }
      return cardData;
    });

  }
 
}
