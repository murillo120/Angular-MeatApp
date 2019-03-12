import { CarrinhoModel } from "./carrinho.model";
import { Menu } from "../menu-item/menu.model";

export class Carrinho {
    itens:CarrinhoModel[] = []

    clear(){

        this.itens = []

    }

    total() : number{
        return this.itens.map(item => item.value()).reduce((prev,value) => prev+value, 0)

    }

    addItem(item: Menu){

        let verifyItem = this.itens.find((anotherItem) => anotherItem.menuItem.id == item.id)
        if(verifyItem){

            verifyItem.quantity++
            
        }else{
            this.itens.push(new CarrinhoModel(item))
        }
    }

    removeItem(item: CarrinhoModel){

        this.itens.splice(this.itens.indexOf(item),1)

    }


}