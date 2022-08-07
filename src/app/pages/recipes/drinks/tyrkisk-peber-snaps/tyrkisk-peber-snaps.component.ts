import { Component, OnInit, HostListener } from '@angular/core';
import { IRecipes } from 'src/app/models/models';
import AllRecipes from "../../../../../assets/recipes/recipes.json"

@Component({
  selector: 'app-tyrkisk-peber-snaps',
  templateUrl: './tyrkisk-peber-snaps.component.html',
  styleUrls: ['./tyrkisk-peber-snaps.component.sass']
})
export class TyrkiskPeberSnapsComponent implements OnInit {
  isMobile: boolean = false
  getScreenWidth!: number;
  AllRecipes: IRecipes = AllRecipes

  recipeName: string = "Tyrkisk Peber Snaps" // Update this when creating a new recipe

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
