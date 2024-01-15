import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products : any;
  count:any;
  // mine:any;
  constructor(public productsService : ProductsService){};
  ngOnInit(){
    this.productsService.getProducts().subscribe((val)=>{
      this.products=val.products
      console.log(this.products)
    }
      )
  }
  getthisone(id:number){
    this.productsService.getproduct(id).subscribe((val)=>console.log(val)
    )
    
  }
  add(id:number){
    this.productsService.addtocart(id);
    // console.log(this.productsService.);
    
  }
  doesexist(id:number){
    if (this.productsService.mycart.some(obj => obj.id == id)) return true;
    return false;
  }
  findthis(id:number){
    this.count=this.productsService.mycart.find(obj=>obj.id==id);
    return this.count;
  }

}
