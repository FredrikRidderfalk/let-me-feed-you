import { Component, OnInit, HostListener } from '@angular/core';
import { Recipe, Recipes } from 'src/app/models/models';
import { ApiService } from "../../services/api.service"
import AllRecipes from "../../../assets/recipes/recipes.json"

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass']
})
export class RecipesComponent implements OnInit {
  isMobile: boolean = false
  getScreenWidth!: number;
  AllRecipes: Recipes = AllRecipes
  foodsBtnIsActive: boolean = false
  drinksBtnIsActive: boolean = false
  dessertsBtnIsActive: boolean = false
  noFilter: boolean = true

  getImageUrl(foodType: { name: string; }) {
    const imageName = foodType.name.toLowerCase().replace(/ /g, '')
    return `/assets/photos/${imageName}.jpg`
  }

  getRecipeEndpoint(recipeName: string) {
    recipeName = recipeName.toLowerCase().replace(/ /g, '-')
    return `/recipes/${recipeName}`
  }

  toggleRecipeFilter(category: string) {
    if(category === "foods") {
      this.foodsBtnIsActive ? this.foodsBtnIsActive = false : this.foodsBtnIsActive = true
      // this.foodsBtnIsActive = true
      this.drinksBtnIsActive = false
      this.dessertsBtnIsActive = false
      this.noFilter = true
    }
    if(category === "drinks") {
      this.drinksBtnIsActive = true
      this.foodsBtnIsActive = false
      this.dessertsBtnIsActive = false
      this.noFilter = true
    }
    if(category === "desserts") {
      this.dessertsBtnIsActive = true
      this.drinksBtnIsActive = false
      this.foodsBtnIsActive = false
      this.noFilter = true
    }
    // if(!this.foodsBtnIsActive && !this.drinksBtnIsActive && !this.dessertsBtnIsActive) {
    //   this.noFilter = true
    // }
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

  // recipes: any

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.checkScreenWidth()

    // Plant-based recipe API #1
    // this.service.getAPIData().subscribe(response => {
    //   this.recipes = response
    //   console.log(response)
    // })

    // Plant-based recipe API #2
    // const proxy = "https://cors-anywhere.herokuapp.com/"
    // const url = "https://plant-based-recipes-api.herokuapp.com/recipes"

    // fetch(`${proxy}${url}`)
    // .then(res=>res.json())
    // .then(recipes=>console.log(recipes))
  }

}
