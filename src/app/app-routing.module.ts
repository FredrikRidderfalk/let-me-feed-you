import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { AcademyComponent } from './pages/academy/academy.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { OkonomiyakiComponent } from './pages/recipes/foods/okonomiyaki/okonomiyaki.component';
import { BurgersComponent } from './pages/recipes/foods/burgers/burgers.component';
import { HotteokComponent } from './pages/recipes/foods/hotteok/hotteok.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "recipes", component: RecipesComponent },
  { path: "recipes/okonomiyaki", component: OkonomiyakiComponent },
  { path: "recipes/hotteok", component: HotteokComponent },
  { path: "recipes/burgers", component: BurgersComponent },
  { path: "academy", component: AcademyComponent },
  { path: "stories", component: StoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
