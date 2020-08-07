import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clicked = false;
  title = 'PersonPhone';

  setClick() { this.clicked = true; }
}
