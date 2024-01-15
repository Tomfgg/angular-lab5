import { Component } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
product:any;
count:any;
constructor(public productsservice:ProductsService){}
ngOnInit(){
 this.productsservice.getit().subscribe((val:any)=>this.product=val)
}
  doesexist(id: number) {
    if (this.productsservice.mycart.some(obj => obj.id == id)) return true;
    return false;
  }
  findthis(id: number) {
    this.count = this.productsservice.mycart.find(obj => obj.id == id);
    return this.count;
  }
  add(id: number) {
    this.productsservice.addtocart(id);
    // console.log(this.productsService.);

  }

}
