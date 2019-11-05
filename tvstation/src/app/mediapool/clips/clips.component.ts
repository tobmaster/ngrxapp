import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Clip} from '../data/clip';
import {select, Store} from '@ngrx/store';
import {AppState, selectClips} from '../../store';
import {clipCreate, clipDelete, clipsFetch} from '../../store/clip.actions';

@Component({
  selector: 'app-clips',
  templateUrl: './clips.component.html',
  styleUrls: ['./clips.component.scss']
})
export class ClipsComponent implements OnInit {

  clipList$: Observable<Clip[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.clipList$ = this.store.pipe(select(selectClips));
    this.loadList();
  }

  loadList() {
    this.store.dispatch(clipsFetch());
  }

  onSave(clip: Clip) {
    this.store.dispatch(clipCreate({clip} ));
  }

  onDelete(clip: Clip) {
    this.store.dispatch(clipDelete({clip} ));
  }
}
