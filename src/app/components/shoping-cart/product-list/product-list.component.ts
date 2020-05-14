import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../../services/product.service';
import {Product} from '../../../models/product';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList:Product[];

  constructor(private fooddata:ProductService ) { }

  ngOnInit(): void {
    
    this.fooddata.getProducts().subscribe(data=>this.productList=data);
  }

}
