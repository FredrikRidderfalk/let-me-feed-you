import { Component, OnInit, HostListener } from '@angular/core';
import { Recipe } from 'src/app/models/models';
import CrackNoodles from "../../../assets/recipes/crack-noodles.json"

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass']
})
export class RecipesComponent implements OnInit {
  isMobile: boolean = false
  getScreenWidth!: number;
  CrackNoodles: Recipe = CrackNoodles

  getImageUrl() {
    const imageName = CrackNoodles.name.toLowerCase().replace(/ /g, '')
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

    // Plant-based recipe API
    const url = "https://plant-based-recipes-api.herokuapp.com/recipes"

    fetch(url)
    .then(res=>res.json())
    .then(recipes=>console.log(recipes))
  }

}
