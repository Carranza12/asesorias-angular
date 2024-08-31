import { CurrencyPipe } from '@angular/common';
import {
  Component,
  Input,
  input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css',
})
export class PreviewComponent implements OnChanges {
  @Input() name!: any;
  @Input() price!: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['name']) {
      this.name = changes['name'].currentValue;
    }
    if (changes['price']) {
      this.price = changes['price'].currentValue;
    }
  }
}
