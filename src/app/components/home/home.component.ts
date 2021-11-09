import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from './mock-data';
import {Product} from '../../model/product';
import {Card} from '../../model/Card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = PRODUCTS;


  data:Card[] = [];

  ngOnInit(){

  }

}
