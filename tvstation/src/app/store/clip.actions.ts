import {createAction, props} from '@ngrx/store';
import {Clip} from '../mediapool/data/clip';

const clipsFetch = createAction('[Clip] Fetch clips');
const clipsLoaded = createAction('[Clip] Loaded clips', props<{ clips: Clip[] }>());

export {
  clipsFetch,
  clipsLoaded
};
