import { Component } from '@angular/core';
import { Person } from 'src/app/model/person';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  khalid: Person = {name: "khalid", age:25}

   persons: Person[] = [
    {name: "sadick", age:25},
    {name: "tom", age:22},
    {name: "motti", age:21},
   ]
}
