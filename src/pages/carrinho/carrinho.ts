import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CarrinhoService } from '../../app/carrinho.service';

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

  carrinho = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public carrinhoService: CarrinhoService) {
  }
  
  excluir(index: number) {
    this.carrinho = this.carrinhoService.removeViagem(index); 
    this.toastCtrl.create({
      message: 'Pacote removido com sucesso',
      duration: 2000,
    }).present();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoPage');
  }
  
  ionViewWillEnter(){
    this.carrinho = this.carrinhoService.getCarrinho();
  }

}
