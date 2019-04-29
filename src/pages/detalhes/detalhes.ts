import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { CarrinhoService } from '../../app/carrinho.service';

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {

  pacote: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public toastCtrl: ToastController,
    public carrinhoService: CarrinhoService) {
    this.pacote = navParams.get("pacote");
  }

  comprar() {
    const confirma = this.alertCtrl.create({
      title: 'Confirmação',
      message: 'Deseja realmente comprar a viagem ' + this.pacote.titulo + ' ?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: data => console.log('Cancelado')
      }, {
        text: 'Confirmar',
        handler: data =>
          this.salvaViagem()
      }]
    });
    confirma.present();
  }

  private salvaViagem() {
    this.carrinhoService.salvaViagem(this.pacote);
    this.presentToast('Viagem comprada');
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
  }

}
