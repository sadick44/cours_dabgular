import { Component } from '@angular/core';
import { PRODUCTS } from './mock-data';
import {Product} from '../../model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: Product[] = PRODUCTS;

}
