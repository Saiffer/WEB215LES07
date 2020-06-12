import { Component } from '@angular/core';
import { falsService } from '../app/example/exam.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [falsService]
})
export class AppComponent {
  title= '';
  constructor(private fals: falsService) {}
  funcDemo(qty) {
    this.fals.falsPoster(qty);
  }
}
