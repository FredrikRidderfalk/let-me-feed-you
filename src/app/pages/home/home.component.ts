import { Component, OnInit, HostListener } from '@angular/core';
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  isMobile: boolean = false
  getScreenWidth!: number;
  temperature!: string

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.getScreenWidth = event.target.innerWidth;
    this.checkScreenWidth()
  }
  
  checkScreenWidth() {
    if(this.getScreenWidth >= 768) {
      this.isMobile = false
    }
    if(this.getScreenWidth < 768) {
      this.isMobile = true
    }
  }

  constructor() { }

  ngOnInit(): void {
    // GSAP
    gsap.from(".title", {
      duration: 3,
      x: "-50%",
      opacity: 0,
      ease: "expo.out",
    });
  
    gsap.from(".subtitle", {
      duration: 3,
      opacity: 0,
      delay: 2,
      ease: "expo.out",
    });

    this.getScreenWidth = window.innerWidth;
    this.checkScreenWidth()
  }

}
