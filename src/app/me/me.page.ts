import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
})
export class MePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  news = [
    {
      subtitle: 'News about FX in your watch list',
      title: 'EUR/USD consolidates in mid-range after the ECB, ahead of US GDP',
      img: '/assets/madison.jpg',
      content: 'EUR/USD is trading around 1.1150, in the middle of the broad range that characterized after the ECB left policy unchanged but hinted upcoming stimulus. The focus now shifts to the US GDP which is projected to show a slowdown.'
    },
    {
      subtitle: 'News about FX in your watch list',
      title: 'All eyes on US GDP after the ECB sends EUR/USD for a wild ride',
      img: '/assets/money.jpg',
      content: 'EUR/USD has stabilized around 1.1150 after hitting a new two-year low of 1.1101 after the European Central Bank opened the door to cutting rates and QE but refrained from imminent action.'
    }
  ]
}
