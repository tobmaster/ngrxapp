import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {ClipState, reducer as clipReducer} from './clip.reducers';

export interface AppState {
  mediapool: ClipState;
}

export const reducers: ActionReducerMap<AppState> = {
  mediapool: clipReducer
};


export const metaReducers: MetaReducer<AppState>[] = [];

// Selectors
export const selectClips = (state: AppState) => state.mediapool.clips;
