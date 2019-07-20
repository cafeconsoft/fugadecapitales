import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-card',
  templateUrl: './server-card.component.html',
  styleUrls: ['./server-card.component.scss']
})
export class ServerCardComponent implements OnInit {

  @Input() serverName: string;

  constructor() { }

  ngOnInit() {
  }

}
