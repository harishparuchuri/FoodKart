import {Product} from './product';
export class CartItem {
    Fid:number;
    Fname:string;
    Fprice:number;
    Fimage:string;
    qty:number;

    constructor(id:number,product:Product){
        this.Fid=product.Fid;
        this.Fname=product.Fname;
        this.Fprice=product.Fprice;
        this.Fimage=product.Fimage;
        this.qty=1;
        

    }
}
