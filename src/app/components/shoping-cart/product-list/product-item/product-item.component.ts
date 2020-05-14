import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import {DatatransferService} from '../../../../services/datatransfer.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem:Product

  constructor(private msg:DatatransferService){ }
  ngOnInit(){


  }

  handleAddToCart(){

    this.msg.sendMsg(this.productItem)
  }
}
