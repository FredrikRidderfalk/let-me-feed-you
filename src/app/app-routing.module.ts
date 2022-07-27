import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { AcademyComponent } from './pages/academy/academy.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { RecipeComponent } from './components/recipe/recipe.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "recipes", component: RecipesComponent },
  { path: "recipe", component: RecipeComponent },
  { path: "academy", component: AcademyComponent },
  { path: "stories", component: StoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
