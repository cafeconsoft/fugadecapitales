import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ServerSelectComponent } from './pages/server-select/server-select.component';
import { EconomyComponent } from './pages/economy/economy.component';
import { PoliticsComponent } from './pages/politics/politics.component';
import { MarketComponent } from './pages/market/market.component';
import { ServerCardComponent } from './components/server-card/server-card.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ChatButtonComponent } from './components/chat-button/chat-button.component';
import { InfoMenuComponent } from './components/info-menu/info-menu.component';
import { PlayersButtonComponent } from './components/players-button/players-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServerSelectComponent,
    EconomyComponent,
    PoliticsComponent,
    MarketComponent,
    ServerCardComponent,
    MainMenuComponent,
    ChatButtonComponent,
    InfoMenuComponent,
    PlayersButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
