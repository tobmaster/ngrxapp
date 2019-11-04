import {createAction, props} from '@ngrx/store';
import {Clip} from '../mediapool/data/clip';

const clipsFetch = createAction('[Clip] Fetch clips');
const clipsLoaded = createAction('[Clip] Loaded clips', props<{ clips: Clip[] }>());
const clipDelete = createAction('[Clip] Delete clip', props<{ clip: Clip }>());
const clipDeleted = createAction('[Clip] Clip deleted', props<{ id: number }>());
const clipCreate = createAction('[Clip] Add clip', props<{ clip: Clip }>());
const clipCreated  = createAction('[Clip] Add clip', props<{ clip: Clip }>());

export {
  clipsFetch,
  clipsLoaded,
  clipDelete,
  clipDeleted,
  clipCreate,
  clipCreated,
};
