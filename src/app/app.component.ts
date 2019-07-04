import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hackademy2019';

  banks = [
    {
      name: 'HSBC',
      img:'hsbc.png'
    },
    {
      name: 'Hang Seng',
      img:'hangseng.png'
    }
  ];
}
