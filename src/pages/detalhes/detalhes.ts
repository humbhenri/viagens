import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

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
    public alertCtrl: AlertController, public toastCtrl: ToastController) {
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
    let carrinho: any = localStorage.getItem('carrinho');
    if (!carrinho) {
      carrinho = [];
    } else {
      carrinho = JSON.parse(carrinho);
    }
    let obj = {
      quantidade: 1,
      pacote: this.pacote,
    };
    let mesmoPacote = carrinho.filter((i: { pacote: { id: any; }; }) => i.pacote.id === this.pacote.id);
    if (mesmoPacote.length > 0) {
      mesmoPacote[0].quantidade += 1;
    } else {
      carrinho.push(obj);
    } 
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
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
