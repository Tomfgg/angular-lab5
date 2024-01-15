import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
mymine:any;
mycart:any[] = [];
toinsert:any={};
// count:number = 0;
  constructor(private http: HttpClient) {}
  getProducts():Observable<any>{
    return this.http.get("https://dummyjson.com/products")
  }
  getproduct(id: number): Observable<any>{
   this.mymine = this.http.get(`https://dummyjson.com/products/${id}`)
  //  console.log(this.mymine);
   
   return this.mymine;
  }
  getit(){
    return this.mymine;
  }
  addtocart(id: number):void{
    if (this.mycart.some(obj=>obj.id == id))
    {
      this.mycart.find(obj=>obj.id==id).count++;
      
    }
    else {
      this.http.get(`https://dummyjson.com/products/${id}`).subscribe(val=>{this.toinsert=val
        this.toinsert.count = 1;
        this.mycart.push(this.toinsert);
    });
      console.log(this.mycart);
    }
  }
  removefromcart(id:number){
    if (this.mycart.some(obj => obj.id == id)) {
      if (this.mycart.find(obj => obj.id == id).count == 1) 
      {
        this.mycart=this.mycart.filter((obj)=>obj.id!=id)
      }
      else this.mycart.find(obj => obj.id == id).count--;
    }
  //   // else {
  //   //   this.http.get(`https://dummyjson.com/products/${id}`).subscribe(val => {
  //   //     this.toinsert = val
  //   //     this.toinsert.count = 1;
  //   //     this.mycart.push(this.toinsert);
  //   //   });
  //   //   console.log(this.mycart);
  //   // }
  }
}
