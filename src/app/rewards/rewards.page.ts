import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
})
export class RewardsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items = [
    {
      name: 'Universal Travel Adapter',
      points: 'Only 30 loyalty points',
      img: '/assets/adapter.jpg'
    },
    {
      name: 'Travel Backpack',
      points: 'Only 100 loyalty points',
      img: '/assets/backpack.jpg'
    },
    {
      name: 'Travel Sleep Pillow',
      points: 'Only 200 loyalty points',
      img: '/assets/pillow.jpg'
    }
  ]
}
