import { Component, OnInit, HostListener } from '@angular/core';
import { Recipe } from 'src/app/models/models';
import CrackNoodles from "../../../assets/recipes/crack-noodles.json"

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.sass']
})
export class RecipeComponent implements OnInit {
  isMobile: boolean = false
  getScreenWidth!: number;
  CrackNoodles: Recipe = CrackNoodles

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

    console.log(CrackNoodles)
  }

}
