import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {MediapoolModule} from './mediapool/mediapool.module';
import {ClipsComponent} from './mediapool/clips/clips.component';

const routes: Routes = [
  { path: 'clips', component: ClipsComponent },
  { path: 'profile', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MediapoolModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
