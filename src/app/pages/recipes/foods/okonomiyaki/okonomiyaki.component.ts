import { Component, OnInit, HostListener } from '@angular/core';
import { Recipes } from 'src/app/models/models';
import RecipeTemplate from "../../../../../assets/recipes/recipes.json"

@Component({
  selector: 'app-okonomiyaki',
  templateUrl: './okonomiyaki.component.html',
  styleUrls: ['./okonomiyaki.component.sass']
})
export class OkonomiyakiComponent implements OnInit {
  isMobile: boolean = false
  getScreenWidth!: number;
  RecipeTemplate: Recipes = RecipeTemplate
  indexOfRecipe!: any;
  recipe: Number = this.indexOfRecipe

  ///////////
  array = RecipeTemplate.foods

  index = this.array.findIndex(object => {
    return object.name === "Hotteok"
  })
  ///////////

  // getRecipeIndex() {
  //   this.indexOfRecipe = RecipeTemplate.foods.indexOf("Okonomiyaki")
  // }

  getImageUrl() {
    const imageName = RecipeTemplate.foods[1].name.toLowerCase().replace(/ /g, '')
    return `/assets/photos/${imageName}.jpg`
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.getScreenWidth = event.target.innerWidth;
    this.checkScreenWidth()
  }
  
  checkScreenWidth() {
    if(this.getScreenWidth > 768) {
      this.isMobile = false
    }
    if(this.getScreenWidth < 768) {
      this.isMobile = true
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.checkScreenWidth()
  }

}
