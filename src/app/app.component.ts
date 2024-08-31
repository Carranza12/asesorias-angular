import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreviewComponent } from './products/preview/preview.component';
import { FormComponent } from './products/form/form.component';
import { ListComponent } from './products/list/list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PreviewComponent,FormComponent,ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'introduccion';
}
