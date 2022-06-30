import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  name:string='';

  saveName(name:string){
    this.name = name;
    console.log(this.name + ': from app component')
  }

}
