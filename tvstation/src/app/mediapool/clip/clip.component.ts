import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.scss']
})
export class ClipComponent implements OnInit {

  @Input() show;
  @Input() title;
  @Input() description;
  @Input() imageUrl;
  @Input() duration;

  constructor() { }

  ngOnInit() {
    console.log(this.imageUrl);
  }

}
