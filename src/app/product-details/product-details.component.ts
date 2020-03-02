import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  item;
  constructor(
    private route: ActivatedRoute,
    private shoppingCart: CartService
  ) { }

  addToCart(product){
    this.shoppingCart.addToCart(product);
    window.alert('Item added to cart sucessfully!');
  }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.item = products[+param.get('productId') - 1];
    });
  }


}
