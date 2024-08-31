import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PreviewComponent } from '../preview/preview.component';
import { ListComponent } from '../list/list.component';
import { Product } from '../../repository/Product';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, PreviewComponent, ListComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  name = new FormControl('', Validators.required);
  price = new FormControl('', Validators.required);
  product!: Product;
  ngOnInit() {}

  addToList() {
    this.product = {
      name: this.name.value || '',
      price: this.price.value || '',
    };
  }
}
