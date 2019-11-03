import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  price: any = '';
  constructor(private route: ActivatedRoute ) {
    this.price = this.route.snapshot.params['price'];
   }

  ngOnInit() {
  }

}
