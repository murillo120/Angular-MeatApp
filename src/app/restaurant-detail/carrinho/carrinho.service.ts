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

            this.increase(verifyItem)
            
        }else{
            this.itens.push(new CarrinhoModel(item))
        }
    }

    removeItem(item: CarrinhoModel){

        this.itens.splice(this.itens.indexOf(item),1)

    }

    increase(item: CarrinhoModel){
        item.quantity++
    }

    decrease(item: CarrinhoModel){
        item.quantity--

        if(item.quantity == 0){
            this.removeItem(item)
        }
    }


}