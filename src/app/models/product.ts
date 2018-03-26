export class Product {
    productID:number
    name:string
    price: number
    category: string
    description: string
    
    constructor()
    constructor(productID:number,name:string,price: number,category: string, description:string)
    constructor(productID?:number,name?:string,price?: number,category?: string, description?:string){
        this.productID = productID;
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
    }
    static get Categories(){
        let categories =[]
        categories[Product.EnumCategories.SHIRTS] = "SHIRTS"
        categories[Product.EnumCategories.PENDANTS] = "PENDANTS"
        categories[Product.EnumCategories.POSTERS] = "POSTERS"
        return categories
    }
    static get EnumCategories(){
        enum categories {SHIRTS,PENDANTS,POSTERS}
        return categories
    }
    static getCategoryName(idx):string{
        return Product.Categories[idx]
    }
}

export class ProductOrder{
    qty:number
    product:Product

    constructor(qty?:number,product?:Product){
        this.qty = qty
        this.product = product
    }
}