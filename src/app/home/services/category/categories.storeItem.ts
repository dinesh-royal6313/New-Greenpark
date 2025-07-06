import { StoreItem } from "src/app/shared/storeitem";
import { Category } from "../../types/category.type";
import { CategoryService } from "./category.service";
import { Injectable } from "@angular/core";
import { Observable,map } from "rxjs";
// import { categories } from "../sampleData/category.data";

@Injectable()
export class CategoriesStoreItem extends StoreItem<Category[]>{
    constructor(private categoryService:CategoryService){
        super([]);
    }

    // async loadCategories(){
    //     this.categoryService.getAllCategories().subscribe(categories => {
    //         this.setValue(categories);
            
    //     }); 
    // }
    async loadCategories() {
        this.categoryService.getAllCategories().subscribe({
          next: (categories) => this.setValue(categories),
          error: (err) => console.error('Failed to load categories:', err),
        });
      }
      

    get categories$(): Observable<Category[]>{
        return this.Value$;
    }

    get topLevelCategories$():Observable<Category[]>{
        return this.Value$.pipe(
            map((categories)=>
            categories.filter((category) => category.parent_category_id===null)
        ));
    }
}           