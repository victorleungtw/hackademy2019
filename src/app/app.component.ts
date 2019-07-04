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
      img:'hsbc.png',
      rate: '0.11341'
    },
    {
      name: 'Hang Seng',
      img:'hangseng.png',
      rate: '0.11324'
    },
    {
      name: 'SC',
      img:'standardchartered.png',
      rate: '0.11322'
    },
    {
      name: 'CCB',
      img:'constructionbank.png',
      rate: '0.11305'
    },
    {
      name: 'Dah Sing',
      img:'dahsing.png',
      rate: '0.11309'
    },
    {
      name: 'Citi',
      img:'citi.png',
      rate: '0.11315'
    }
  ];
}
