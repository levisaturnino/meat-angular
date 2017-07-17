import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { MEAT_API } from './../app.api';
import { OnInit,  Injectable } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { ErrorHandler } from './../app.error-handler';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class RestaurantService implements OnInit {
   
   
   constructor(private http:Http){
       
   }
   ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
   restaurants():Observable<Restaurant[]>{

    return this.http.get(`${MEAT_API}/restaurants`)
    .map( response => response.json())
    .catch(ErrorHandler.handleError);
   }
  
     restaurantById(id: string):Observable<Restaurant>{

    return this.http.get(`${MEAT_API}/restaurants/${id}`)
    .map( response => response.json())
    .catch(ErrorHandler.handleError);
   }
   

    reviewsOfRestaurant(id: string):Observable<any>{

    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    .map( response => response.json())
    .catch(ErrorHandler.handleError);
   }

   
    menuOfRestaurant(id: string):Observable<MenuItem[]>{

    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
    .map( response => response.json())
    .catch(ErrorHandler.handleError);
   }
}