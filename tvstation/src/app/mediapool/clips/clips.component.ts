import {Component, OnInit} from '@angular/core';
import {ClipService} from '../services/clip.service';
import {Observable} from 'rxjs';
import {Clip} from '../data/clip';
import {select, Store} from '@ngrx/store';
import {AppState, selectClips} from '../../store';
import {clipsFetch, clipsLoaded} from '../../store/clip.actions';

@Component({
  selector: 'app-clips',
  templateUrl: './clips.component.html',
  styleUrls: ['./clips.component.scss']
})
export class ClipsComponent implements OnInit {

  clipList$: Observable<Clip[]>;

  constructor(private clipService: ClipService, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.clipList$ = this.store.pipe(select(selectClips));
    this.loadList();
  }

  loadList() {
    this.store.dispatch(clipsFetch());

    // this.clipService.list().subscribe(loadedClips => this.store.dispatch(clipsLoaded({clips: loadedClips})));
  }

  onSave(clip: Clip) {
    this.clipService.save(clip).subscribe();
    this.loadList();
  }

  onDelete(clip: Clip) {
    this.clipService.delete(clip).subscribe();
    this.loadList();
  }
}
