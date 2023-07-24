import { inject, makeEnvironmentProviders } from '@angular/core';

import { catchError, exhaustMap, map, of } from 'rxjs';
import { createEffect, Actions, ofType, provideEffects } from '@ngrx/effects';
import {
  on,
  props,
  Store,
  emptyProps,
  provideState,
  createReducer,
  createFeature,
  createSelector,
  createActionGroup,
} from '@ngrx/store';

import { Band } from '../band.model';
import { BandsService } from '../bands.service';

export interface BandState {
  collection: Band[];
  isLoading: boolean;
  query: string;
}

export const initialState: BandState = {
  collection: [],
  isLoading: false,
  query: '',
};

export const bandsPageActions = createActionGroup({
  source: 'Bands Page',
  events: {
    opened: emptyProps(),
    addBand: props<{ name: string }>(),
    queryChanged: props<{ query: string }>(),
  },
});

export const bandsApiActions = createActionGroup({
  source: 'Bands API',
  events: {
    bandsLoadedSuccess: props<{ collection: Band[] }>(),
    bandsLoadedFailure: props<{ message: string }>(),
  },
});

const reducer = createReducer(
  initialState,
  on(bandsPageActions.opened, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(bandsPageActions.queryChanged, (state, { query }) => ({
    ...state,
    query,
  })),
  on(bandsPageActions.addBand, (state, { name }) => {
    const band: Band = {
      id: state.collection.length + 1,
      name,
      photoUrl: '',
    };
    return {
      ...state,
      collection: [...state.collection, band],
      isLoading: false,
    };
  }),
  on(bandsApiActions.bandsLoadedSuccess, (state, { collection }) => ({
    ...state,
    collection,
    isLoading: false,
  })),
  on(bandsApiActions.bandsLoadedFailure, (state) => ({
    ...state,
    isLoading: false,
  }))
);

export const bandsFeature = createFeature({
  name: 'bands',
  reducer,
  extraSelectors: ({ selectCollection, selectQuery }) => ({
    selectFilteredBands: createSelector(
      selectCollection,
      selectQuery,
      (collection, query) =>
        collection.filter(({ name }) => name.toLowerCase().includes(query))
    ),
  }),
});

export const {
  selectQuery,
  selectIsLoading,
  selectCollection,
  selectBandsState,
  selectFilteredBands,
} = bandsFeature;

export const loadAllBands$ = createEffect(
  (actions$ = inject(Actions), bandsService = inject(BandsService)) => {
    return actions$.pipe(
      ofType(bandsPageActions.opened),
      exhaustMap(() => {
        return bandsService.getAll().pipe(
          map((collection) =>
            bandsApiActions.bandsLoadedSuccess({ collection })
          ),
          catchError(({ message }: { message: string }) =>
            of(bandsApiActions.bandsLoadedFailure({ message }))
          )
        );
      })
    );
  },
  { functional: true }
);

export function provideBandsFeature() {
  return makeEnvironmentProviders([
    provideState(bandsFeature),
    provideEffects({ loadAllBands$ }),
  ]);
}
