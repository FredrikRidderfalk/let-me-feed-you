import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.sass']
})
export class TemperatureComponent implements OnInit {
  @Input() temperature!: string

  constructor() { }

  ngOnInit(): void {
  }

}
