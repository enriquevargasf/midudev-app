import { Component, inject  } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Product } from './../../models/product.model';

@Component({
  standalone: true,
  imports: [ProductComponent, CommonModule],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  http = inject(HttpClient); //permite utilizar la instancia creada para la aplicacion
  products: Product[] = [];

   //Se invoca  una vez el componente fue renderizado
   ngOnInit(){
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe((data) => {
      this.products = data;
    });
  }

}
