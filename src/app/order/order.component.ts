import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/payment/radio.model';
import { OrderService } from './order.service';
import { CarrinhoModel } from 'app/restaurant-detail/carrinho/carrinho.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  paymentOptions : Array<RadioOption> = [
    {label: "Dinheiro", value: "MONEY" },
    {label: "cartão de crédito",value: "CRED"},
    {label: "Ticket Refeição", value: "TRE"}
  ]

  constructor(private orderService:OrderService) { }

  ngOnInit() {
  }

  cartItens(): Array<CarrinhoModel>{

    return this.orderService.products()
  }

  increase(product:CarrinhoModel){

    this.orderService.increase(product)

  }

  decrease(product: CarrinhoModel){

    this.orderService.decrease(product)

  }

  remove(product : CarrinhoModel){
    this.orderService.removeItem(product)
  }



}
