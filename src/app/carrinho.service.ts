import { Injectable } from "@angular/core";

@Injectable()
export class CarrinhoService {

    getCarrinho() {
        let carrinho: any = localStorage.getItem('carrinho');
        if (!carrinho) {
            carrinho = [];
        } else {
            carrinho = JSON.parse(carrinho);
        }
        return carrinho;
    }

    salvaCarrinho(carrinho: any) {
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }

    removeViagem(index: number) {
        let carrinho: any = this.getCarrinho();
        carrinho.splice(index, 1);
        this.salvaCarrinho(carrinho);
        return carrinho;
    }

    salvaViagem(viagem: { id: any; }) {
        let carrinho: any = this.getCarrinho();
        let obj = {
            quantidade: 1,
            pacote: viagem,
        };
        let mesmoPacote = carrinho.filter((i: { pacote: { id: any; }; }) => i.pacote.id === viagem.id);
        if (mesmoPacote.length > 0) {
            mesmoPacote[0].quantidade += 1;
        } else {
            carrinho.push(obj);
        }
        this.salvaCarrinho(carrinho);
    }
}