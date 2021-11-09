import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {Card} from '../../model/Card';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];


  data:Card[] = [];


  constructor(private productService: ProductService){
    
  }

  ngOnInit(){
   this.productService.getProducts().subscribe((products: Product[])=>{
      this.data  = this.products.map((product)=>{
        return {title:product.name, subTitle:product.price+' euros', image:product.picture};
      }); 
    });
   

  }

}
