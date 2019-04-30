import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from 'ionic-angular';
import { CarrinhoService } from '../../app/carrinho.service';
import { VendasProvider } from '../../providers/vendas/vendas';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html'
})
export class CarrinhoPage {
  carrinho = [];
  user: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public carrinhoService: CarrinhoService,
    public vendasProvider: VendasProvider,
  ) {}

  excluir(index: number) {
    this.carrinho = this.carrinhoService.removeViagem(index);
    this.toastCtrl
      .create({
        message: 'Pacote removido com sucesso',
        duration: 2000
      })
      .present();
  }

  finalizar() {
    let obj_venda = {
      user_id: this.user.id,
      data: (new Date()).toString(),
      pacotes: this.carrinho,
    };
    if (this.vendasProvider.addVenda(obj_venda)) {
      this.toastCtrl.create({
        message: 'Venda efetuada com sucesso',
        duration: 2000
      });
      this.carrinhoService.limpa();
      this.carrinho = null;
      this.navCtrl.setRoot(HomePage);
    } else {
      this.toastCtrl.create({
        message: 'Falha ao realizar compra',
        duration: 5000
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoPage');
  }

  ionViewWillEnter() {
    this.carrinho = this.carrinhoService.getCarrinho();
    this.user = JSON.parse(localStorage.getItem('user'));
  }
}
