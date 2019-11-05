import {Action, createReducer, on} from '@ngrx/store';
import {Clip} from '../mediapool/data/clip';
import {clipCreated, clipDeleted, clipsFetch, clipsLoaded} from './clip.actions';

export interface ClipState {
  clips: Clip[];
}

export const initialState: ClipState = {
  clips: []
};

const clipReducer = createReducer(
  initialState,
  on(clipsFetch, state => ({clips: []})),
  on(clipsLoaded, (state, payload) => ({clips: payload.clips})),
  on(clipCreated, (state, payload) => ({clips: [...state.clips, payload.clip]})),
  on(clipDeleted, (state, payload) => ({clips: state.clips.filter(clip => clip.id !== payload.id)}))
);

export function reducer(state: ClipState | undefined, action: Action) {
  return clipReducer(state, action);
}
