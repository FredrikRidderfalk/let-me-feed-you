import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { AcademyComponent } from './pages/academy/academy.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { OkonomiyakiComponent } from './pages/recipes/foods/okonomiyaki/okonomiyaki.component';
import { BurgersComponent } from './pages/recipes/foods/burgers/burgers.component';
import { HotteokComponent } from './pages/recipes/foods/hotteok/hotteok.component';
import { CrackNoodlesComponent } from './pages/recipes/foods/crack-noodles/crack-noodles.component';
import { CausaComponent } from './pages/recipes/foods/causa/causa.component';
import { SmokingMaryComponent } from './pages/recipes/drinks/smoking-mary/smoking-mary.component';
import { YuzuGenieComponent } from './pages/recipes/drinks/yuzu-genie/yuzu-genie.component';
import { TyrkiskPeberSnapsComponent } from './pages/recipes/drinks/tyrkisk-peber-snaps/tyrkisk-peber-snaps.component';
import { BrowniesComponent } from './pages/recipes/desserts/brownies/brownies.component';
import { BerryPieComponent } from './pages/recipes/desserts/berry-pie/berry-pie.component';
import { FlamingBananasComponent } from './pages/recipes/desserts/flaming-bananas/flaming-bananas.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "recipes", component: RecipesComponent },
  { path: "academy", component: AcademyComponent },
  { path: "stories", component: StoriesComponent },
  
  { path: "recipes/okonomiyaki", component: OkonomiyakiComponent },
  { path: "recipes/hotteok", component: HotteokComponent },
  { path: "recipes/burgers", component: BurgersComponent },
  { path: "recipes/crack-noodles", component: CrackNoodlesComponent },
  { path: "recipes/causa", component: CausaComponent },

  { path: "recipes/smoking-mary", component: SmokingMaryComponent },
  { path: "recipes/yuzu-genie", component: YuzuGenieComponent },
  { path: "recipes/tyrkisk-peber-snaps", component: TyrkiskPeberSnapsComponent },

  { path: "recipes/brownies", component: BrowniesComponent },
  { path: "recipes/berry-pie", component: BerryPieComponent },
  { path: "recipes/flaming-bananas", component: FlamingBananasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
