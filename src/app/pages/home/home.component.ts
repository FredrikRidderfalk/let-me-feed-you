import { Component, OnInit } from '@angular/core';
// import { gsap } from 'gsap'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // GSAP
    // gsap.from(".title", {
    //   duration: 3,
    //   x: "-50%",
    //   opacity: 0,
    //   ease: "expo.out",
    // });
  
    // gsap.from(".subtitle", {
    //   duration: 3,
    //   opacity: 0,
    //   delay: 2,
    //   ease: "expo.out",
    // });
  }

}
