import { Component, OnInit, Input, Injectable, Output, EventEmitter } from '@angular/core';
import { Menu } from '../menu-item/menu.model';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {


  menuItem: Observable<Menu[]>


  constructor(private restaurantService:RestaurantService, private route:ActivatedRoute) { }

  ngOnInit() {

    this.menuItem = this.restaurantService.getMenuOfRestaurant(this.route.parent.snapshot.params['id'])
   
  }

  pickItem(itemPicked:Menu){

    console.log(itemPicked)

  }

}
