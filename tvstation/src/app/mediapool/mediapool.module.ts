import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClipsComponent} from './clips/clips.component';
import {ClipComponent} from './clip/clip.component';
import {ClipService} from './services/clip.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CreateClipComponent } from './create-clip/create-clip.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ClipsComponent,
    ClipComponent,
    CreateClipComponent,
  ],
  exports: [ ClipsComponent ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [
    ClipService
  ]
})
export class MediapoolModule { }
