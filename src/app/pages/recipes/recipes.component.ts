import { Component, OnInit, HostListener } from '@angular/core';
import { Recipe, Recipes } from 'src/app/models/models';
import CrackNoodles from "../../../assets/recipes/crack-noodles.json"
import RecipesDB from "../../../assets/recipes/recipes.json"
import { ApiService } from "../../services/api.service"

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass']
})
export class RecipesComponent implements OnInit {
  isMobile: boolean = false
  getScreenWidth!: number;
  CrackNoodles: Recipe = CrackNoodles
  Recipes: Recipes = RecipesDB

  getImageUrl(foodType: { name: string; }) {
    const imageName = foodType.name.toLowerCase().replace(/ /g, '')
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

  recipes: any

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
