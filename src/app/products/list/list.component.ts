import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../repository/Product';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnChanges{
  @Input() product!:Product;

  list:Product[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["product"]){
      this.list.push(changes["product"].currentValue)
    }
  }
}
