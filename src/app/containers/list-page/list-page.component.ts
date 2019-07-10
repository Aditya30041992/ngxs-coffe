import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { GetCoffeeList, AddToCart } from 'src/app/state/app.action';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  @Select((state: AppApp) => state.app.coffeeList)
  list$;

  isFeatureRemixOn = environment.features.remix;

  constructor(private router: Router, private store: Store) { }

  ngOnInit() {
    this.store.selectOnce(x => x.app.coffeeList.length)
      .subscribe(x => {
        if (x) { return; }
        this.store.dispatch(new GetCoffeeList());
      });
  }

  addToCart(name: string) {
    this.store.dispatch(new AddToCart(name));
  }

  addToCartAndCheckout(name: string) {
    this.addToCart(name);
    this.router.navigateByUrl('/cart');
  }

}
