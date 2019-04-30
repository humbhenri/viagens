import { Component } from "@angular/core";
import { NavController, NavParams, ToastController } from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";
import { LoginPage } from "../login/login";
import { UsuariosProvider } from "../../providers/usuarios/usuarios";

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-cadastro",
  templateUrl: "cadastro.html"
})
export class CadastroPage {
  email: string;
  senha: string;
  nome: string;
  telefone: string;
  cpf: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public angularFireAuth: AngularFireAuth,
    public toastCtrl: ToastController,
    public usuariosProvider: UsuariosProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CadastroPage");
  }

  cadastrarUsuario() {
    this.angularFireAuth.auth
      .createUserWithEmailAndPassword(this.email, this.senha)
      .then(user => {
        let obj_user = {
          id: user.uid,
          nome: this.nome,
          cpf: this.cpf,
          telefone: this.telefone,
          email: this.email,
        };
        if (this.usuariosProvider.addUsuario(obj_user)) {
          this.toastCtrl
            .create({
              message: "Cadastrado com sucesso",
              duration: 2000
            })
            .present();
          this.navCtrl.pop();
        }
      })
      .catch(error => {
        this.toastCtrl
          .create({
            message: "Erro ao cadastrar o usuário",
            duration: 5000
          })
          .present();
        console.log(error);
      });
  }
}
