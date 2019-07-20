import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slide-buttons',
  templateUrl: './slide-buttons.component.html',
  styleUrls: ['./slide-buttons.component.scss']
})
export class SlideButtonsComponent implements OnInit {

  @Input() altLeftButtonActive: boolean;
  @Input() altRightButtonActive: boolean;
  @Output() altButtonEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  altRight() {
    this.altButtonEvent.emit(1);
  }

  altLeft() {
    this.altButtonEvent.emit(2);
  }

}
