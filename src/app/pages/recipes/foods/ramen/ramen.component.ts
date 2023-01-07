import { Component, OnInit, HostListener } from '@angular/core';
import { IRecipes } from 'src/app/models/models';
import AllRecipes from "../../../../../assets/recipes/recipes.json"

@Component({
  selector: 'app-ramen',
  templateUrl: './ramen.component.html',
  styleUrls: ['./ramen.component.sass']
})
export class RamenComponent implements OnInit {
  isMobile: boolean = false
  getScreenWidth!: number;
  AllRecipes: IRecipes = AllRecipes

  recipeName: string = "Ramen" // Update this when creating a new recipe

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
