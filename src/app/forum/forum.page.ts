import { Component } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: 'forum.page.html',
  styleUrls: ['forum.page.scss']
})
export class ForumPage {

  constructor() {}

  options = [
    {
      subtitle: 'Basic',
      title: '1 HKD to 13.7937 JPY',
      content: 'Best rate amount banks | Earn 100 stars loyalty point | Schedule to get at bank',
      cta: 'Earn loyalty points'
    },
    {
      subtitle: 'New fund',
      title: 'With our bank account product',
      content: 'Jade | Premier | Advance',
      cta: 'Open new account'
    },
    {
      subtitle: 'Progressive',
      title: 'Better rate with larger amount',
      content: 'Exchange rate of amount of transaction |  e.g.  0-10000 hkd converted $$ rate = 7.9, |  10000-100,000 rate = 7.8',
      cta: 'Choose'
    }
  ]
}
