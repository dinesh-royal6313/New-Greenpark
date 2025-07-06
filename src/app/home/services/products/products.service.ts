  import { Injectable } from '@angular/core';
  import { Product } from '../../types/products.type';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';

  @Injectable()
  export class ProductsService {

    constructor(private httpClient:HttpClient) { }

    // getAllProducts(query?: string): Observable<Product[]>{  
    //   let url: string='http://localhost:5001/products'
    //   // console.log('Fetching product list:', products);
    //   if(query){
    //     url+='?'+query;
    //   }
    //   return this.httpClient.get<Product[]>(url);
    // }
    getAllProducts(query?: string): Observable<Product[]> {  
      console.log('query:',query);
      let url: string = 'http://localhost:5001/products';
    
      if (query) {
        url += `?${query}`;
      }
    
      console.log('Fetching products from:', url); // Debugging log
      return this.httpClient.get<Product[]>(url);
    }

    getProduct(id:number):Observable<Product[]>{
      const url:string ='http://localhost:5001/products/'+id;
      return this.httpClient.get<Product[]>(url);
    }
    
  }
