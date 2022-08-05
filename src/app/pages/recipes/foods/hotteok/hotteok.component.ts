import { Component, OnInit, HostListener } from '@angular/core';
import { Recipes } from 'src/app/models/models';
import AllRecipes from "../../../../../assets/recipes/recipes.json"

@Component({
  selector: 'app-hotteok',
  templateUrl: './hotteok.component.html',
  styleUrls: ['./hotteok.component.sass']
})
export class HotteokComponent implements OnInit {
  isMobile: boolean = false
  getScreenWidth!: number;
  AllRecipes: Recipes = AllRecipes

  recipeName: string = "Hotteok" // Update this when creating a new recipe

  i: number = this.AllRecipes.foods.findIndex(recipe => {
    return recipe.name === this.recipeName
  })

  getImageUrl() {
    const imageName = AllRecipes.foods[this.i].name.toLowerCase().replace(/ /g, '')
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
