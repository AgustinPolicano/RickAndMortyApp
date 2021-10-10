import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'personajes', component: CharactersComponent},
  {path: 'locaciones', component: LocationsComponent},
  {path: 'episodios', component: EpisodesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
