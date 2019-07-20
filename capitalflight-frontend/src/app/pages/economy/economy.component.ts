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

  leftSwipe: string;
  initialPosition: number;
  fullWidth: number;
  percentPosition: number;
  minDespl = 25;
  lastLeftMovement = 0;
  lastRightMovement = 0;
  prevSoftMove = false;

  industry: boolean;
  business: boolean;

  constructor() {
  }

  ngOnInit() {
    this.percentPosition = -100;
    this.leftSwipe = this.percentPosition + '%';
    this.fullWidth = document.body.offsetWidth;
    this.business = false;
    this.industry = true;
  }

  startTouch(evt: any) {
    const touches = evt.touches[0];
    if (touches) {
      this.initialPosition = touches.clientX;
    }
  }

  moveTouch(evt) {
    this.prevSoftMove = true;
    const touches = evt.touches[0];
    if (touches) {
      const movement = touches.clientX - this.initialPosition;
      if (movement > 0) {
        const pmov = movement * 100 / this.fullWidth;
        if (pmov < 100 && (this.percentPosition + pmov) <= 0) {
          this.leftSwipe = (this.percentPosition + pmov) + '%';
          this.lastLeftMovement = pmov;
        }
      } else {
        const pmov = movement * -1 * 100 / this.fullWidth;
        if (pmov < 100 && (this.percentPosition - pmov) >= -200) {
          this.leftSwipe = (this.percentPosition - pmov) + '%';
          this.lastRightMovement = pmov;
        }
      }
    }
  }

  endTouch(evt) {
    this.prevSoftMove = false;

    let moved = false;

    if (this.lastLeftMovement > this.minDespl) {
      moved = true;
      if (this.percentPosition + 100 <= 0) {
        this.percentPosition += 100;
      }
    }

    if (this.lastRightMovement > this.minDespl) {
      moved = true;
      if (this.percentPosition - 100 >= -200) {
        this.percentPosition -= 100;
      }
    }

    this.leftSwipe = this.percentPosition + '%';
    this.business = this.percentPosition === -200;
    this.industry = this.percentPosition === -100;

    this.lastLeftMovement = 0;
    this.lastRightMovement = 0;
  }

  menuButton(button: number) {
    if (button === 1) {
      this.percentPosition = -200;
      this.leftSwipe = this.percentPosition + '%';
    } else {
      this.percentPosition = -100;
      this.leftSwipe = this.percentPosition + '%';
    }
    this.business = this.percentPosition === -200;
    this.industry = this.percentPosition === -100;
  }

}
