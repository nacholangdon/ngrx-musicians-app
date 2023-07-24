import { Injectable } from '@angular/core';

import { delay, Observable, of } from 'rxjs';

import { Band } from './band.model';

@Injectable({ providedIn: 'root' })
export class BandsService {
  getAll(): Observable<Band[]> {
    return of(bandsMock).pipe(delay(1_000));
  }
}

const bandsMock: Band[] = [
  {
    id: 1,
    name: 'The Beatles',
    photoUrl: '/assets/bands/the-beatles.jpg',
  },
  {
    id: 2,
    name: 'R.E.M',
    photoUrl: '/assets/bands/rem.jpg',
  },
  {
    id: 3,
    name: 'The Rolling Stones',
    photoUrl: '/assets/bands/the-rolling-stones.jpg',
  },
  {
    id: 4,
    name: 'The Who',
    photoUrl: '/assets/bands/the-who.jpg',
  },
  {
    id: 5,
    name: 'U2',
    photoUrl: '/assets/bands/u2.jpg',
  },
  {
    id: 6,
    name: 'Queen',
    photoUrl: '/assets/bands/queen.jpg',
  },
];
