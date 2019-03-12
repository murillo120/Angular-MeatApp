import { Component, OnInit, Input, Injectable, Output, EventEmitter } from '@angular/core';
import { Menu } from './menu.model';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menuOfRestaurant: Menu[]
  @Output() addItem = new EventEmitter()

  constructor() { }

  ngOnInit() {

  }

  menuItensEmit(){
    this.addItem.emit(this.menuOfRestaurant)
  }
}
