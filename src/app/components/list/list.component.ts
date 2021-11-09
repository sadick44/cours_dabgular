import { Component, Input } from '@angular/core';
import { Card } from '../../model/Card';

;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
  @Input() data : Card[];


  constructor(){
    this.data = []
  } 

  }
 
