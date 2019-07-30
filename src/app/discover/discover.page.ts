import { Component } from '@angular/core';
import _ from 'lodash';

import { Rate } from '../rate';
import { RateService } from '../rate.service';

@Component({
  selector: 'app-discover',
  templateUrl: 'discover.page.html',
  styleUrls: ['discover.page.scss']
})
export class DiscoverPage {

  constructor(private rateService: RateService) {}

  fromCurrency = '';
  toCurrency = '';
  rates: Rate[];
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

  getLocation(){
    // TODO: Implement get location
    this.fromCurrency = 'HKD'
  }

  selectFromCurrency($event){
    this.fromCurrency = $event.detail.value
    this.rates = []
  }

  selectToCurrency($event){
    this.toCurrency = $event.detail.value
    var pair = (this.fromCurrency + this.toCurrency).toLowerCase()
    this.getRates()
    if (pair.length === 6) { // Selected from and to currency
      _.forEach(this.rates, function(bank){
        bank.rate = bank[pair]
      })
    }
  }

  getRates(): void {
    this.rateService.getRates()
        .subscribe(rates => this.rates = rates);
  }


}
