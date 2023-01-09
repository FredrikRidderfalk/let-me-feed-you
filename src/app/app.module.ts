import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { AcademyComponent } from './pages/academy/academy.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { GuideComponent } from './components/guide/guide.component';
import { MobileNavbarComponent } from './components/mobile-navbar/mobile-navbar.component';
import { CheapComponent } from './components/tags/cheap/cheap.component';
import { EasyComponent } from './components/tags/easy/easy.component';
import { QuickComponent } from './components/tags/quick/quick.component';
import { WashComponent } from './components/tags/wash/wash.component';
import { TemperatureComponent } from './components/tags/temperature/temperature.component';

import { HttpClientModule } from "@angular/common/http";
import { OkonomiyakiComponent } from './pages/recipes/foods/okonomiyaki/okonomiyaki.component';
import { BeanBurgersComponent } from './pages/recipes/foods/bean-burgers/bean-burgers.component';
import { HotteokComponent } from './pages/recipes/foods/hotteok/hotteok.component';
import { CrackNoodlesComponent } from './pages/recipes/foods/crack-noodles/crack-noodles.component';
import { CausaComponent } from './pages/recipes/foods/causa/causa.component';
import { SmokingMaryComponent } from './pages/recipes/drinks/smoking-mary/smoking-mary.component';
import { YuzuGenieComponent } from './pages/recipes/drinks/yuzu-genie/yuzu-genie.component';
import { TyrkiskPeberSnapsComponent } from './pages/recipes/drinks/tyrkisk-peber-snaps/tyrkisk-peber-snaps.component';
import { BrowniesComponent } from './pages/recipes/desserts/brownies/brownies.component';
import { BerryPieComponent } from './pages/recipes/desserts/berry-pie/berry-pie.component';
import { FlamingBananasComponent } from './pages/recipes/desserts/flaming-bananas/flaming-bananas.component';
import { GuideToPlantBasedSubstitutionsComponent } from './pages/academy/guides/guide-to-plant-based-substitutions/guide-to-plant-based-substitutions.component';
import { GuideToTofuComponent } from './pages/academy/guides/guide-to-tofu/guide-to-tofu.component';
import { RamenComponent } from './pages/recipes/foods/ramen/ramen.component'
import { TortillaSoupComponent } from './pages/recipes/foods/tortilla-soup/tortilla-soup.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RecipesComponent,
    AcademyComponent,
    StoriesComponent,
    GuideComponent,
    MobileNavbarComponent,
    CheapComponent,
    EasyComponent,
    QuickComponent,
    WashComponent,
    TemperatureComponent,
    OkonomiyakiComponent,
    BeanBurgersComponent,
    HotteokComponent,
    CrackNoodlesComponent,
    CausaComponent,
    SmokingMaryComponent,
    YuzuGenieComponent,
    TyrkiskPeberSnapsComponent,
    BrowniesComponent,
    BerryPieComponent,
    FlamingBananasComponent,
    GuideToPlantBasedSubstitutionsComponent,
    GuideToTofuComponent,
    RamenComponent,
    TortillaSoupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
