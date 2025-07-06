import { Component } from '@angular/core';
import { ProductsStoreItem } from '../../services/products/products.storeitem';

@Component({
  selector: 'app-products-gallery',
  templateUrl: './products-gallery.component.html',
  styleUrls: ['./products-gallery.component.scss']
})
export class ProductsGalleryComponent {
  constructor(private productsStoreItem: ProductsStoreItem){}

  onSelectSubCategory(subCategoryId: number): void {
    console.log('Received subCategoryClicked event:', subCategoryId);
    this.productsStoreItem.loadProducts('subCategoryid=' + subCategoryId);
}

}
