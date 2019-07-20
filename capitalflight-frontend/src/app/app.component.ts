import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'capitalflight-frontend';
  showMenues: boolean;
  chatOpened: boolean;

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.showMenues = event.url !== '/' && event.url !== '/server';
      }
    });
    this.chatOpened = false;
  }

  ngOnInit(): void { }

  openChat() {
    this.chatOpened = true;
  }

  closeChat() {
    this.chatOpened = false;
  }

}
