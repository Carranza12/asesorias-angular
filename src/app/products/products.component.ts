import { Component, computed, signal, Signal } from '@angular/core';
import { Product } from '../repository/Product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  title: string = 'Curso de angular basico editado';
  productsList: any = signal([
    {
      id: 1,
      name: 'Mouse gamer',
      price: 600,
      category: 'Electronica',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Teclado Gamer',
      price: 1200,
      category: 'Electronica',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Laptop Dell',
      price: 6500,
      category: 'Electronica',
      quantity: 1,
    },
  ]);

  totalPrice = computed(() => {
    return this.productsList().reduce(
      (acc:any, product:any) => acc + product.price * product.quantity,
      0
    );
  });

  add(product: Product) {
    this.productsList.update((products:any) =>
      products.map((p:any) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  }
  less(product: Product){
    console.log("less...")
    if(product.quantity === 0){
      return;
    }
    if(product.quantity > 0){
      this.productsList.update((products:any) =>
        products.map((p:any) =>
          p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
        )
      );
    }
  }
}
