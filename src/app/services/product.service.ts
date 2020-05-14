import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product} from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url:string="../../assets/Data/Food_Data.json"

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]>{

    return this.http.get<Product[]>(this.url);

  }
}
