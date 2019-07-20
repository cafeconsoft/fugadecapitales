import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ServerSelectComponent } from './pages/server-select/server-select.component';
import { PoliticsComponent } from './pages/politics/politics.component';
import { EconomyComponent } from './pages/economy/economy.component';
import { MarketComponent } from './pages/market/market.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'server', component: ServerSelectComponent },
  { path: 'politics', component: PoliticsComponent },
  { path: 'economy', component: EconomyComponent },
  { path: 'market', component: MarketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
