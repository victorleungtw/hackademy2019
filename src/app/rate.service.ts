import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Rate } from './rate';

import { RATES } from './mock-rates';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor() { }

  getRates(): Observable<Rate[]> {
    return of(RATES);
  }
}
