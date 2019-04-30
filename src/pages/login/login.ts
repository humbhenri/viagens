import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { AngularFireAuth } from 'angularfire2/auth';
import { ComprasPage } from '../compras/compras';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  senha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseauth: AngularFireAuth, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  isLogged() {
    return localStorage.getItem('user');
  }

  ionViewWillEnter(){
    if (this.isLogged()) {
      this.navCtrl.setRoot(ComprasPage);
    }
  }

  goCadastro() {
    this.navCtrl.push(CadastroPage);
  }

  logar() {
    this.firebaseauth.auth.signInWithEmailAndPassword(this.email, this.senha)
      .then(result => {
        console.log(result);
        const uid = result.uid;
        this.toastCtrl.create({
          message: 'Usuário autenticado com sucesso',
          duration: 2000,
        }).present();
        let obj_user = {
          id: uid,
          email: result.email,
        };
        localStorage.setItem('user', JSON.stringify(obj_user));
        this.navCtrl.setRoot(ComprasPage);
      })
      .catch(error => {
        console.log(error);
        this.toastCtrl.create({
          message: 'Falha na autenticação'
        }).present();
      });
  }

}
