import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {AppState} from '../store';
import {ClipService} from '../mediapool/services/clip.service';
import {clipCreate, clipCreated, clipDelete, clipDeleted, clipsFetch, clipsLoaded} from '../store/clip.actions';
import {exhaustMap, map, tap} from 'rxjs/operators';
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
          map(_ => clipDeleted({id: clip.id}))
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
          tap(_ => console.log('x',clip)),
          map(savedClip => clipCreated({clip: savedClip}))
        )
      )
    );

}
