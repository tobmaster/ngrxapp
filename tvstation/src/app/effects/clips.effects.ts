import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {AppState} from '../store';
import {ClipService} from '../mediapool/services/clip.service';
import {clipsLoaded, clipsFetch, clipDelete, clipCreate, clipDeleted, clipCreated} from '../store/clip.actions';
import {exhaustMap, map, mergeMap} from 'rxjs/operators';
import {Clip} from '../mediapool/data/clip';

@Injectable()
export class ClipsEffects {
  constructor(private actions$: Actions, private store: Store<AppState>, private clipService: ClipService) {
  }

  @Effect()
  fetchClips$ = this.actions$
    .pipe(
      ofType(clipsFetch),
      map(action => action),
      exhaustMap(() =>
        this.clipService.list().pipe(
          map(clips => clipsLoaded({clips}))
          //catchError(error => of(clipsLoadFailure({ error })))
        )
      )
    );

  @Effect()
  deleteClip$ = this.actions$
    .pipe(
      ofType(clipDelete),
      map(action => action.clip),
      exhaustMap((clip: Clip) =>
        this.clipService.delete(clip).pipe(
          map(clips => clipDeleted(clip.id))
        )
      )
    );

  @Effect()
  createClip$ = this.actions$
    .pipe(
      ofType(clipCreate),
      map(action => action.clip),
      exhaustMap((clip: Clip) =>
        this.clipService.save(clip).pipe(
          map(clips => clipCreated({clip}))
        )
      )
    );

}
