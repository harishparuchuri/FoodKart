import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {

  subject =new Subject()

  constructor() { }


  sendMsg(product)
  {
    this.subject.next(product)
    
  }

  getMsg()
  {
    return this.subject.asObservable()
  }
}
