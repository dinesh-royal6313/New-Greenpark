import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';
import {Product} from '../../types/products.type';
import { Subscription } from 'rxjs';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartStoreItem } from '../../services/cart/cart.storeitem';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit, OnDestroy{
  product:Product;
  subscriptions:Subscription = new Subscription();
  faShoppingCart = faShoppingCart;

  constructor(private activatedRoute:ActivatedRoute , private productService: ProductsService , private cart: CartStoreItem){}
  ngOnInit():void{
    const id:number = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.subscriptions.add(
      this.productService.getProduct(id).subscribe((product) => {
        this.product = product[0];
        console.log(this.product.product_img)
      })
    );
  }

  addToCart(){
    this.cart.addProduct(this.product);
  }

  ngOnDestroy(): void {
      this.subscriptions.unsubscribe();
  }

}
