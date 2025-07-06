import { StoreItem } from "src/app/shared/storeitem";
import { Product } from "../../types/products.type";
import { ProductsService } from "./products.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { publishFacade } from "@angular/compiler";

@Injectable()
export class ProductsStoreItem extends StoreItem<Product[]>{
    constructor(private productsService: ProductsService){
        super([]);
    }

    // async loadProducts(query?:string){
    //     this.productsService.getAllProducts(query).subscribe((products)=>{
    //         this.setValue(products);
    //     });
    // }
    async loadProducts(query?: string) {
        console.log('Loading products with query:', query); // Debugging log
        if (!query) {
            console.warn('⚠️ No query provided, loading all products by default'); // Not an error, just a warning
        } else {
            console.log('✅ Loading products with query:', query);
        }
        this.productsService.getAllProducts(query).subscribe((products) => {
            console.log('✅ Received products:', products); // Debugging log
            this.setValue(products);
        });
    }

    get products$():Observable<Product[]>{
        return this.Value$;
    }

    get products(): Product[]{
        return this.value;
    }
}