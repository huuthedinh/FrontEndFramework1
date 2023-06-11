import { Component } from '@angular/core';
import { IProduct } from '../interface/IProduct';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  products: IProduct[] = [];
  constructor(private service: ProductsService) {
    this.service.getProduct().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => console.log(error.message)
    );

  }
  delete(id: string) {
    this.service.delete(id).subscribe(
      () => {
        this.products = this.products.filter(product => product.id !== id)
      }
    )

  }
}
