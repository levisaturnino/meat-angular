import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { RestaurantsComponent } from 'app/restaurants/restaurants.component';
import { RestaurantService } from './../../restaurants/restaurant.service';


@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantService:RestaurantService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantService.reviewsOfRestaurante(this.route.parent.snapshot.params['id'])
  }

}
