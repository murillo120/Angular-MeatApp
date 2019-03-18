import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarrinhoModel } from 'app/restaurant-detail/carrinho/carrinho.model';

@Component({
  selector: 'mt-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products: Array<CarrinhoModel>

  @Output() increaseProduct = new EventEmitter<CarrinhoModel>()
  @Output() decreaseProduct = new EventEmitter<CarrinhoModel>()
  @Output() removeItem = new EventEmitter<CarrinhoModel>()


  constructor() { }

  ngOnInit() {
  }

increase(product: CarrinhoModel){

  this.increaseProduct.emit(product)

}

decrease(product: CarrinhoModel){

  this.decreaseProduct.emit(product)

}

remove(product: CarrinhoModel){

  this.removeItem.emit(product)

}


}
