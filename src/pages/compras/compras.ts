import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { VendasProvider } from '../../providers/vendas/vendas';

/**
 * Generated class for the ComprasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-compras',
  templateUrl: 'compras.html'
})
export class ComprasPage {
  compras: any = null;
  user: any = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public firebaseAuth: AngularFireAuth,
    public vendasProvider: VendasProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComprasPage');
  }

  sair() {
    this.firebaseAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.navCtrl.setRoot(LoginPage);
    });
  }

  getCompras() {
    this.vendasProvider
      .getVendas(this.user.id)
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
      .subscribe(dados => {
        console.table(dados);
        this.compras = dados;
      });
  }

  ionViewDidEnter() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getCompras();
  }
}
