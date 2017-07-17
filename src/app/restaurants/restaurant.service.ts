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
   
   restaurants():Observable<Restaurant[]>{

    return this.http.get(`${MEAT_API}/restaurants`)
    .map( response => response.json())
    .catch(ErrorHandler.handleError);
   }
   
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }


}