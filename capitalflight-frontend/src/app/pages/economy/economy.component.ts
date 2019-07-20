import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-economy',
  templateUrl: './economy.component.html',
  styleUrls: [
    './economy.component.scss',
    '../../utils/css/generals.scss'
  ]
})
export class EconomyComponent implements OnInit {

  sliderStyle: string;

  constructor() {
    this.sliderStyle = 'left: -100%';
  }

  ngOnInit() {
  }

  industriesFD(evt) {
    this.sliderStyle = 'left: -100%';
  }

  business(evt) {
    this.sliderStyle = 'left: -200%';
  }

  detail(evt) {
    this.sliderStyle = 'left: 0%';
  }

  industriesFB(evt) {
    this.sliderStyle = 'left: -100%';
  }

}
