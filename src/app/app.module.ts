import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { CarrinhoPage } from "../pages/carrinho/carrinho";
import { DetalhesPage } from "../pages/detalhes/detalhes";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { TabsPage } from "../pages/tabs/tabs";
import { MyApp } from "./app.component";
import { CadastroPage } from "../pages/cadastro/cadastro";
import { CarrinhoService } from "./carrinho.service";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import config from "./firebase.config"; //https://console.firebase.google.com/project/curso-pbh-ionic/overview?hl=pt-br
import { ComprasPage } from "../pages/compras/compras";
import { UsuariosProvider } from "../providers/usuarios/usuarios";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireDatabaseModule } from "angularfire2/database";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    DetalhesPage,
    CarrinhoPage,
    LoginPage,
    CadastroPage,
    ComprasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    HttpClientModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    DetalhesPage,
    CarrinhoPage,
    LoginPage,
    CadastroPage,
    ComprasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CarrinhoService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UsuariosProvider
  ]
})
export class AppModule {}
