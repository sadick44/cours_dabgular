import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Card } from '../../model/Card';


;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  @Input() data : Card[];
@Output() likeClick: EventEmitter<number> = new EventEmitter<number>()

  constructor(){
    this.data = []
  }

  ngOnInit() {
    console.log(this.data)
    
  }
  onLikeClick(id: number){
    this.likeClick.emit(id);
    console.log("Button clicked")
  }
} 
