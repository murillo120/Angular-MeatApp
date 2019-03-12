import { Restaurant } from "./restaurant.model";
import { MEAT_API } from '../app.api'
import { Injectable } from "@angular/core";
import { Http } from '@angular/http'
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {ErrorHandler} from './app.error-handler'
import { Menu } from "app/restaurant-detail/menu-item/menu.model";

@Injectable()
export class RestaurantService{

    constructor(private http:Http){}

    getRestaurants() :Observable<Array<Restaurant>>{

        return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    getRestaurantInfo(id:String): Observable<Restaurant>{

         return this.http.get(`${MEAT_API}/restaurants/${id}`).map(response => response.json()).catch(ErrorHandler.handleError)

    }

    getMenuOfRestaurant(id:string): Observable<Menu[]>{

          return this.http.get(`${MEAT_API}/restaurants/${id}/menu`).map(response => response.json()).catch(ErrorHandler.handleError)

    }

    reviewsOfRestaurant(id:string): Observable<any>{

         return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`).map(response => response.json()).catch(ErrorHandler.handleError)
    
    }

}