import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattlesComponent } from './battles/battles.component';
import { CharactersComponent } from './characters/characters.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  { path: 'battles', component: BattlesComponent},
  { path: 'characters', component: CharactersComponent},
  { path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
