import { Component, OnInit, HostListener } from '@angular/core';
import { Recipes } from 'src/app/models/models';
import AllRecipes from "../../../../../assets/recipes/recipes.json"

@Component({
  selector: 'app-yuzu-genie',
  templateUrl: './yuzu-genie.component.html',
  styleUrls: ['./yuzu-genie.component.sass']
})
export class YuzuGenieComponent implements OnInit {
  isMobile: boolean = false
  getScreenWidth!: number;
  AllRecipes: Recipes = AllRecipes

  recipeName: string = "Yuzu Genie" // Update this when creating a new recipe

  i: number = this.AllRecipes.drinks.findIndex(recipe => {
    return recipe.name === this.recipeName
  })

  getImageUrl() {
    const imageName = AllRecipes.drinks[this.i].name.toLowerCase().replace(/ /g, '')
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
