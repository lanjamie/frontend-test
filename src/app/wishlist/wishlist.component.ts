import { Component, OnInit } from '@angular/core';
import { VolumeInfo } from '../dm/bookresponse';
import { WishListService } from '../wish-list.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private wishListService: WishListService) { }

  wishList!:VolumeInfo[];

  onRemove(item:VolumeInfo){
    this.wishListService.remove(item);
  }


  ngOnInit(): void {
    this.wishList = this.wishListService.getWishList();
  }

}
