import { Component } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { IProduct } from '../interface/IProduct'
@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent {
  productForm = this.Builder.group({
    name: ['', [Validators.required]],
    price: [0],
    desc: ['', [Validators.required]],
  });
  constructor(private service: ProductsService,
    private Builder: UntypedFormBuilder,) { }

  OnSubmit() {
    const product: IProduct = {
      id: '',
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
      desc: this.productForm.value.desc || '',
    };

    this.service.addProduct(product).subscribe(() => {
      alert('Product Created')
    }
    );

  }
}
