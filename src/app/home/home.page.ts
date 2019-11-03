import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras  } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router: Router) {}
  itemSelected(item){
    let navigationExtras: NavigationExtras = {
      state: {
        user: item
      }
    };

    console.log(item)
     this.router.navigate(['/list'], navigationExtras);
  }
  
}
