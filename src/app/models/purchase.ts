import { ProductOrder } from "./product";
import { Buyer } from "./buyer";

export class Purchase {
    purchaseID:number
    createdAt: Date
    boughtAt : Date
    products : Array<ProductOrder>
    totalAmount : number

    buyerID : string
    buyer : Buyer
    
    constructor(products : Array<ProductOrder>)
    constructor(products : Array<ProductOrder>, purchaseID? : number, createdAt? : Date, boughtAt? : Date,
         buyerID? : string, totalAmount?:number, buyer?:Buyer){

        this.purchaseID = purchaseID
        this.createdAt = createdAt
        this.boughtAt = boughtAt
        this.buyerID = buyerID
        this.products = products
        this.totalAmount = totalAmount
        this.buyer = buyer

    }
}