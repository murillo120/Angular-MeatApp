import { Component, OnInit, Input, Injectable } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { Restaurant } from 'app/restaurants/restaurant.model';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})

@Injectable()
export class RestaurantDetailComponent implements OnInit {

  restaurantInfo: Restaurant

  constructor(private restaurantservice:RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {


    this.restaurantservice.getRestaurantInfo(this.route.snapshot.params['id']).subscribe(response => this.restaurantInfo = response)

  }

}
