import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Clip} from '../data/clip';

@Component({
  selector: 'app-create-clip',
  templateUrl: './create-clip.component.html',
  styleUrls: ['./create-clip.component.scss']
})
export class CreateClipComponent implements OnInit {

  clipForm: FormGroup;
  @Output() save = new EventEmitter<Clip>();

  constructor(private fb: FormBuilder) {
    this.clipForm = this.createFormGroup();
  }

  ngOnInit() {
  }

  createFormGroup() {
    return this.fb.group(
      {
        show: new FormControl(),
        title: new FormControl(),
        description: new FormControl(),
        imageUrl: new FormControl(),
        duration: new FormControl()
      }
    );
  }

  onSubmit() {
    this.save.emit(this.clipForm.value);
  }
}
