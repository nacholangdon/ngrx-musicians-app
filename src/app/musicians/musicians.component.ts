import {
  inject,
  OnInit,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

import { Store } from '@ngrx/store';

import { musiciansPageActions, musiciansFeature } from './store/musicians';

import { SearchBoxComponent } from '../shared/search-box.component';
import { AddMusicianComponent } from './components/add-musicians.component';
import { MusicianListComponent } from './components/musicians-list.component';

@Component({
  selector: 'app-musicians',
  standalone: true,
  imports: [SearchBoxComponent, MusicianListComponent, AddMusicianComponent],
  template: `
    <h1>Find your favorite musicians</h1>

    <div
      style="display: flex; justify-content: space-between; align-items: center"
    >
      <app-search-box
        placeholder="Jimi"
        [query]="query()"
        (search)="onSearch($event)"
      />
      <app-add-musicians (musician)="onAdd($event)" />
    </div>
    <app-musician-list [musicians]="musicians()" [isLoading]="isLoading()" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusiciansComponent implements OnInit {
  private readonly store = inject(Store);

  readonly musicians = this.store.selectSignal(
    musiciansFeature.selectFilteredMusicians
  );
  readonly isLoading = this.store.selectSignal(
    musiciansFeature.selectIsLoading
  );
  readonly query = this.store.selectSignal(musiciansFeature.selectQuery);

  ngOnInit() {
    this.store.dispatch(musiciansPageActions.opened());
  }

  onSearch(query: string): void {
    this.store.dispatch(musiciansPageActions.queryChanged({ query }));
  }

  onAdd(name: string): void {
    this.store.dispatch(musiciansPageActions.addMusician({ name }));
  }
}
