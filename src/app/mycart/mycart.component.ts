import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-mycart',
  standalone: true,
  imports: [],
  templateUrl: './mycart.component.html',
  styleUrl: './mycart.component.css'
})
export class MycartComponent {
  cart:any;
  totalprice:number=0;
  totalcount:number=0;
  constructor(private productsservice:ProductsService){}
  ngOnInit(){
    this.cart=this.productsservice.mycart;
    for (let i = 0; i < this.cart.length; i++) {
      this.cart[i].total = this.cart[i].count * this.cart[i].price
    }
    console.log(this.cart);
    this.get_total()
  }
  add(id:number){
    this.productsservice.addtocart(id)
    for (let i = 0; i < this.cart.length; i++) {
      this.cart[i].total = this.cart[i].count * this.cart[i].price
    }
    this.get_total()
  }
  remove(id:number){
    if (this.cart.find((obj: any) => obj.id == id).count == 1) {
      this.cart = this.cart.filter((obj: any) => obj.id != id)
    }
    this.productsservice.removefromcart(id)
    for (let i = 0; i < this.cart.length; i++) {
      this.cart[i].total = this.cart[i].count * this.cart[i].price
    }
    this.get_total()

  }
   get_total(){
     this.totalcount = 0;
     this.totalprice = 0;
    for(let i=0;i<this.cart.length;i++){
      this.totalcount+=this.cart[i].count;
      this.totalprice+=this.cart[i].total;
    }
  }
}
