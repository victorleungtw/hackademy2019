import { Component } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-discover',
  templateUrl: 'discover.page.html',
  styleUrls: ['discover.page.scss']
})
export class DiscoverPage {

  constructor() {}

  fromCurrency = '';
  toCurrency = '';
  banks = [];

  getLocation(){
    this.fromCurrency = 'HKD'
  }

  selectFromCurrency($event){
    this.fromCurrency = $event.detail.value
    this.banks = []
  }

  selectToCurrency($event){
    this.toCurrency = $event.detail.value
    var pair = (this.fromCurrency + this.toCurrency).toLowerCase()
    if (pair.length === 6) {
      _.forEach(this.rates, function(bank){
        bank.rate = bank[pair]
      })
      this.banks = this.rates
    }
  }

  currencys = [
    {
      code:'HKD'
    },
    {
      code:'AUD'
    },
    {
      code:'EUR'
    },
    {
      code:'GBP'
    },
    {
      code:'CAD'
    },
    {
      code:'JPY'
    },
    {
      code:'CHF'
    },
    {
      code:'NZD'
    },
    {
      code:'SGD'
    },
    {
      code:'THB'
    },
    {
      code:'USD'
    }
  ]

  rates = [
    {
      name: 'HSBC',
      img:'hsbc.png',
      hkdaud: 0.19,
      hkdeur: 0.11,
      hkdgbp: 0.1,
      hkdcad: 0.17,
      hkdjpy: 13.7937,
      hkdchf: 0.13,
      hkdnzd: 0.19,
      hkdsgd: 0.18,
      hkdthb: 3.94,
      hkdusd: 0.13
    },
    {
      name: 'Hang Seng',
      img:'hangseng.jpeg',
      hkdaud: 0.19,
      hkdeur: 0.11,
      hkdgbp: 0.1,
      hkdcad: 0.17,
      hkdjpy: 13.8426,
      hkdchf: 0.13,
      hkdnzd: 0.19,
      hkdsgd: 0.18,
      hkdthb: 3.94,
      hkdusd: 0.13
    },
    {
      name: 'Standard Chartered',
      img:'standardchartered.jpeg',
      hkdaud: 0.19,
      hkdeur: 0.11,
      hkdgbp: 0.1,
      hkdcad: 0.17,
      hkdjpy: 13.4589,
      hkdchf: 0.13,
      hkdnzd: 0.19,
      hkdsgd: 0.18,
      hkdthb: 3.94,
      hkdusd: 0.13
    },
    {
      name: 'Construction Bank',
      img:'constructionbank.png',
      hkdaud: 0.19,
      hkdeur: 0.11,
      hkdgbp: 0.1,
      hkdcad: 0.17,
      hkdjpy: 13.6123,
      hkdchf: 0.13,
      hkdnzd: 0.19,
      hkdsgd: 0.18,
      hkdthb: 3.94,
      hkdusd: 0.13
    },
    {
      name: 'Dah Sing Bank',
      img:'dahsing.png',
      hkdaud: 0.19,
      hkdeur: 0.11,
      hkdgbp: 0.1,
      hkdcad: 0.17,
      hkdjpy: 13.6332,
      hkdchf: 0.13,
      hkdnzd: 0.19,
      hkdsgd: 0.18,
      hkdthb: 3.94,
      hkdusd: 0.13
    },
    {
      name: 'Citi Bank',
      img:'citi.png',
      hkdaud: 0.19,
      hkdeur: 0.11,
      hkdgbp: 0.1,
      hkdcad: 0.17,
      hkdjpy: 13.7337,
      hkdchf: 0.13,
      hkdnzd: 0.19,
      hkdsgd: 0.18,
      hkdthb: 3.94,
      hkdusd: 0.13
    }
  ];
}
