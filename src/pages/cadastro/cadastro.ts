import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  email: string;
  senha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularFireAuth: AngularFireAuth, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  cadastrarUsuario() {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(this.email, this.senha)
      .then(() => {
        this.toastCtrl.create({
          message: 'Cadastrado com sucesso',
          duration: 2000,
        }).present();
        this.navCtrl.pop();
      }).catch(error => {
        this.toastCtrl.create({
          message: 'Erro ao cadastrar o usuário',
          duration: 5000,
        }).present();
        console.log(error);
      });
  }
}
