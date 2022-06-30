import { Component, OnInit, Input } from '@angular/core';

import { HttpService } from '../http.service';
import { Item, VolumeInfo } from '../dm/bookresponse'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private httpService: HttpService) { }

  @Input() name:string ='';

  query:string='';

  books:Item[]=[];
  
  details!:VolumeInfo;

  selectedBookId:string='';

  getBook(){
    console.log(this.query + ' : from search component')
    return this.httpService.getBook(this.query).subscribe(
      (res) => this.books = res.items
    );
  }

  selectBook(book:Item){
    this.selectedBookId = book.id
    this.details = book.volumeInfo;
    console.log (book.id);
  }



  ngOnInit(): void {
    
    
  }

}
