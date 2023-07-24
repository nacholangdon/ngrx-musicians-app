import {
  inject,
  OnInit,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

import { Store } from '@ngrx/store';

import { bandsFeature, bandsPageActions } from './store/bands';
import { SearchBoxComponent } from '../shared/search-box.component';
import { BandListComponent } from './components/bands-list.component';

@Component({
  selector: 'app-bands',
  standalone: true,
  imports: [SearchBoxComponent, BandListComponent],
  template: `
    <h1>Find your favorite bands</h1>

    <app-search-box
      placeholder="U2"
      [query]="query()"
      (search)="onSearch($event)"
    />
    <app-band-list [bands]="bands()" [isLoading]="isLoading()" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BandsComponent implements OnInit {
  private readonly store = inject(Store);

  readonly bands = this.store.selectSignal(bandsFeature.selectFilteredBands);
  readonly isLoading = this.store.selectSignal(bandsFeature.selectIsLoading);
  readonly query = this.store.selectSignal(bandsFeature.selectQuery);

  ngOnInit() {
    this.store.dispatch(bandsPageActions.opened());
  }

  onSearch(query: string): void {
    this.store.dispatch(bandsPageActions.queryChanged({ query }));
  }
}
