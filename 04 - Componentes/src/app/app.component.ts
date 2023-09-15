import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['./app.component.css'],
  standalone: false,
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  buttonLabel: string = 'Carrinho';
}
