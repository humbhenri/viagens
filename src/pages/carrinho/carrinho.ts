import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

  carrinho = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }
  
  excluir(index: number) {
    this.carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
    this.toastCtrl.create({
      message: 'Pacote removido com sucesso',
      duration: 2000,
    }).present();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoPage');
  }
  
  ionViewWillEnter(){
    this.carrinho = JSON.parse(localStorage.getItem('carrinho'));
  }

}
