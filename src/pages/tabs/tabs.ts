import { Component } from '@angular/core';
import { CarrinhoPage } from '../carrinho/carrinho';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CarrinhoPage;
  tab3Root = LoginPage;

  constructor() {

  }
}
