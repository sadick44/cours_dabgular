import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import  { Contact } from '../model/Contact';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor(private http: HttpClient){}

  create(contact: Contact): Observable<any> {
    return this.http.post(environment.API.baseUrl+environment.API.endpoint.contact, contact);
  }

}
