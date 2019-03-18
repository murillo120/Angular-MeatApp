import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/payment/radio.model';

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

  constructor() { }

  ngOnInit() {
  }

}
