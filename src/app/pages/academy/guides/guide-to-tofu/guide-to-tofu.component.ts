import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide-to-tofu',
  templateUrl: './guide-to-tofu.component.html',
  styleUrls: ['./guide-to-tofu.component.sass']
})
export class GuideToTofuComponent implements OnInit {
  isMobile: boolean = false
  getScreenWidth!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
