import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyProfileComponent} from './my-profile/my-profile.component'

const routes: Routes = [
  {path: '', redirectTo:'myProfile', pathMatch:'full'},
  {path:'myProfile', component:MyProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
