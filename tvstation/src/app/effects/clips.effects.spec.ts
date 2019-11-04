import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ClipsEffects } from './clips.effects';

describe('ClipsEffects', () => {
  let actions$: Observable<any>;
  let effects: ClipsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClipsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ClipsEffects>(ClipsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
