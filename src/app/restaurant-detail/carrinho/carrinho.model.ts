import { Menu } from "../menu-item/menu.model";

export class CarrinhoModel{

    constructor(public menuItem:Menu, public quantity:number = 1){

        

    }

    value() :number{

        return this.menuItem.price * this.quantity
    }

}