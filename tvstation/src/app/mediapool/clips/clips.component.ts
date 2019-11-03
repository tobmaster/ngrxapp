import {Component, OnInit} from '@angular/core';
import {ClipService} from '../services/clip.service';
import {Observable} from 'rxjs';
import {Clip} from '../data/clip';

@Component({
  selector: 'app-clips',
  templateUrl: './clips.component.html',
  styleUrls: ['./clips.component.scss']
})
export class ClipsComponent implements OnInit {

  clipList$: Observable<Clip>;

  constructor(private clipService: ClipService) {}

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.clipList$ = this.clipService.list();
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
