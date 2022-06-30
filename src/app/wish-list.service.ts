import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VolumeInfo } from './dm/bookresponse';


@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor() { }

  wishlist: VolumeInfo[] = [];

  addToWishList(details:VolumeInfo){
    console.log(details.title + ':added item from wishlist service');
    this.wishlist.push(details)
    console.log(this.wishlist + " : wishlist from wishlist service")
  }
  getWishList(){
    return this.wishlist;
  }

  remove(item:VolumeInfo){
    const index = this.wishlist.indexOf(item, 0);
    if (index > -1) {
      this.wishlist.splice(index, 1);
    }
  }

}
