import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../restaurant.model'

@Component({
  selector: 'mt-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent implements OnInit {

  @Input() restaurant: Restaurant

  constructor() { }

  ngOnInit() {
  }

}
