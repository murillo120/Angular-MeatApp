import { Component, OnInit, Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { RestaurantService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})

@Injectable()
export class RestaurantsComponent implements OnInit {

  restaurant: Array<Restaurant>
  
  constructor(private restauranteService:RestaurantService) { }

  ngOnInit() {

   this.restauranteService.getRestaurants()
   .subscribe(restaurants => this.restaurant = restaurants)

  }

}
