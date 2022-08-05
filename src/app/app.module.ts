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
import { RecipeComponent } from './components/recipe/recipe.component';
import { GuideComponent } from './components/guide/guide.component';
import { MobileNavbarComponent } from './components/mobile-navbar/mobile-navbar.component';
import { CheapComponent } from './components/tags/cheap/cheap.component';
import { EasyComponent } from './components/tags/easy/easy.component';
import { QuickComponent } from './components/tags/quick/quick.component';
import { WashComponent } from './components/tags/wash/wash.component';
import { TemperatureComponent } from './components/tags/temperature/temperature.component';

import { HttpClientModule } from "@angular/common/http";
import { OkonomiyakiComponent } from './pages/recipes/foods/okonomiyaki/okonomiyaki.component';
import { BurgersComponent } from './pages/recipes/foods/burgers/burgers.component';
import { HotteokComponent } from './pages/recipes/foods/hotteok/hotteok.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RecipesComponent,
    AcademyComponent,
    StoriesComponent,
    RecipeComponent,
    GuideComponent,
    MobileNavbarComponent,
    CheapComponent,
    EasyComponent,
    QuickComponent,
    WashComponent,
    TemperatureComponent,
    OkonomiyakiComponent,
    BurgersComponent,
    HotteokComponent
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
