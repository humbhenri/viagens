import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ComprasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-compras',
  templateUrl: 'compras.html',
})
export class ComprasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComprasPage');
  }

  sair() {
    this.firebaseAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.navCtrl.setRoot(LoginPage);
    });
  }

}
