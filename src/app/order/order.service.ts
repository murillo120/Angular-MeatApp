import { Injectable } from "@angular/core";
import { Carrinho } from "app/restaurant-detail/carrinho/carrinho.service";
import { CarrinhoModel } from "app/restaurant-detail/carrinho/carrinho.model";

@Injectable()
export class OrderService{


    constructor(private cartService: Carrinho){
        
    }

    products(): Array<CarrinhoModel>{
        return this.cartService.itens
    }

    increase(item: CarrinhoModel){
        this.cartService.increase(item)
    }

    decrease(item: CarrinhoModel){
        this.cartService.decrease(item)
    }

    removeItem(item: CarrinhoModel){
        this.cartService.removeItem(item)
    }

}