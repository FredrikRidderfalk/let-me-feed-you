import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  navLinks = {
    recipes: "Recipes",
    academy: "Academy",
    stories: "Stories"
  }
  userTheme: string | null = "dark_mode"

  constructor() { }

  ngOnInit(): void {
    const localStorageTheme = localStorage.getItem("user_theme");
    if (localStorageTheme) {
      this.userTheme = localStorageTheme
    }
  }

  toggleTheme() {
    localStorage.setItem("user_theme", this.userTheme == "dark_mode" ? "light_mode" : "dark_mode");
    const prevTheme = localStorage.getItem("user_theme");
    this.userTheme = prevTheme
    document.body.classList.toggle('dark_mode');
  }

}
