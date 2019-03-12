import { Component, OnInit } from '@angular/core';
import { Carrinho } from './carrinho.service';
import { Menu } from '../menu-item/menu.model';

@Component({
  selector: 'mt-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {



  constructor(private carrinhoService:Carrinho) { }

  ngOnInit() {}

  itens() : any[]{

    return this.carrinhoService.itens
  }

  clear(){
    this.carrinhoService.clear()
  }

  total() : number{

    return this.carrinhoService.total()
  }

  removeItem(item:any){

    this.carrinhoService.removeItem(item)
  }

  addItem(item:any){
    this.carrinhoService.addItem(item)
  }

}
