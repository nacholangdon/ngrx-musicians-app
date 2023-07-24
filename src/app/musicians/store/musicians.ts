import { inject, makeEnvironmentProviders } from '@angular/core';

import {
  catchError,
  exhaustMap,
  map,
  of,
  switchMap,
  withLatestFrom,
} from 'rxjs';
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

import { Musician } from '../musician.model';
import { MusiciansService } from '../musicians.service';

export interface MusicianState {
  collection: Musician[];
  isLoading: boolean;
  query: string;
}

export const initialState: MusicianState = {
  collection: [],
  isLoading: false,
  query: '',
};

export const musiciansPageActions = createActionGroup({
  source: 'Musicians Page',
  events: {
    opened: emptyProps(),
    addMusician: props<{ name: string }>(),
    queryChanged: props<{ query: string }>(),
  },
});

export const musiciansApiActions = createActionGroup({
  source: 'Musicians API',
  events: {
    musiciansLoadedSuccess: props<{ collection: Musician[] }>(),
    musiciansLoadedFailure: props<{ message: string }>(),
  },
});

const reducer = createReducer(
  initialState,
  on(musiciansPageActions.opened, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(musiciansPageActions.queryChanged, (state, { query }) => ({
    ...state,
    query,
  })),
  on(musiciansPageActions.addMusician, (state, { name }) => {
    const musician: Musician = {
      id: state.collection.length + 1,
      name,
      photoUrl: '',
    };
    return {
      ...state,
      collection: [...state.collection, musician],
      isLoading: false,
    };
  }),
  on(musiciansApiActions.musiciansLoadedSuccess, (state, { collection }) => ({
    ...state,
    collection,
    isLoading: false,
  })),
  on(musiciansApiActions.musiciansLoadedFailure, (state) => ({
    ...state,
    isLoading: false,
  }))
);

export const musiciansFeature = createFeature({
  name: 'musicians',
  reducer,
  extraSelectors: ({ selectCollection, selectQuery }) => ({
    selectFilteredMusicians: createSelector(
      selectCollection,
      selectQuery,
      (musicians, query) =>
        musicians.filter(({ name }) => name.toLowerCase().includes(query))
    ),
  }),
});

export const {
  selectQuery,
  selectIsLoading,
  selectCollection,
  selectMusiciansState,
  selectFilteredMusicians,
} = musiciansFeature;

export const loadAllMusicians$ = createEffect(
  (actions$ = inject(Actions), musiciansService = inject(MusiciansService)) => {
    return actions$.pipe(
      ofType(musiciansPageActions.opened),
      exhaustMap(() => {
        return musiciansService.getAll().pipe(
          map((collection) =>
            musiciansApiActions.musiciansLoadedSuccess({ collection })
          ),
          catchError(({ message }: { message: string }) =>
            of(musiciansApiActions.musiciansLoadedFailure({ message }))
          )
        );
      })
    );
  },
  { functional: true }
);

export function provideMusiciansFeature() {
  return makeEnvironmentProviders([
    provideState(musiciansFeature),
    provideEffects({ loadAllMusicians$ }),
  ]);
}
