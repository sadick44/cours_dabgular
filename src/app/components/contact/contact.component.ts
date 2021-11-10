import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import {Contact} from '../../model/Contact'
import {Data} from '../../model/Data'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{

  contact: Contact = {name:'', email:'', phone:'', message: ''}
  data: Data = {name:'', email:'', phone:'', message: ''}

constructor(private contactService: ContactService){}
 
  onSubmit(): void{
    this.contactService.create(this.contact).subscribe(response =>console.log(response))
  }

}
