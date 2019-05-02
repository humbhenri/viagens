import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the VendasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VendasProvider {

  constructor(public http: HttpClient, public afd: AngularFireDatabase) {
  }

  addVenda(venda: { user_id?: any; data?: string; pacotes?: any[]; }) {
    if (this.afd.list('/vendas').push(venda)) {
      this.afd.list('/usuario-vendas/' + venda.user_id).push(venda);
      return true;
    }
    return false;
  }

  getVendas(user_id: number) {
    return this.afd.list('/usuario-vendas/' + user_id);
  }

}
