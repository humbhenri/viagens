import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

/*
  Generated class for the UsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuariosProvider {
  constructor(public http: HttpClient, public afd: AngularFireDatabase) {}

  addUsuario(usuario) {
    if (this.afd.list('usuarios/' + usuario.id).push(usuario)) {
      return true;
    }
    return false;
  }
}
