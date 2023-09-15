import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'life-cycle';
  isAliveCheckSample:boolean = true;

  disposeCheckSample():void {
    const alive:boolean = this.isAliveCheckSample
    if(alive == true)
      this.isAliveCheckSample = false
    else
      this.isAliveCheckSample = true
  }
}
