import { Component, OnInit, Input } from '@angular/core';
import { Item, VolumeInfo } from '../dm/bookresponse';
import { WishListService } from '../wish-list.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private wishlistService: WishListService) { }

  
  onAdd(details:VolumeInfo){
    console.log('add to wish list: ' + this.details.title)
    this.wishlistService.addToWishList(this.details);
  }

  @Input() details!:VolumeInfo;

  ngOnInit(): void {
  }

}
