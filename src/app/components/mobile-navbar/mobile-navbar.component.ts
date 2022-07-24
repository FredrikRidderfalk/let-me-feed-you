import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.sass']
})
export class MobileNavbarComponent implements OnInit {
  navLinks = {
    recipes: "Recipes",
    academy: "Academy",
    stories: "Stories"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
