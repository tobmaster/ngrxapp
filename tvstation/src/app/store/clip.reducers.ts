import {Action, createReducer, on} from '@ngrx/store';
import * as ClipActions from './clip.actions';
import {Clip} from '../mediapool/data/clip';
import {AppState} from './index';

export interface ClipState {
  clips: Clip[];
}

export const initialState: ClipState = {
  clips: []
};

const clipReducer = createReducer(
  initialState,
  on(ClipActions.clipsFetch, state => {
    return {
      ...state,
      clips: []
    };
  }),
  on(ClipActions.clipsLoaded, (state, payload) => {
    return {
      ...state,
      clips: payload.clips
    };
  })
);

export function reducer(state: ClipState | undefined, action: Action) {
  return clipReducer(state, action);
}
