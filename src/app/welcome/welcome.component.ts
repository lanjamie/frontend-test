
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }
  @Output() nameEvent = new EventEmitter<string>();

  name:string='';
  

  onSubmit(){
    console.log(this.name)  
    this.nameEvent.emit(this.name);
  }

  ngOnInit(): void {
  }

}
