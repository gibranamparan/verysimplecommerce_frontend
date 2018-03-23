import { Product } from "../models/product"

let products : Array<Product> = new Array<Product>()
products.push(new Product(1,"Luna y sol dorado",70,Product.Categories[Product.EnumCategories.PENDANTS],"Description 1"))
products.push(new Product(2,"Camiseta negra comics XL",70,Product.Categories[Product.EnumCategories.SHIRTS],"Description 2"))
products.push(new Product(3,"Poster grande comics",70,Product.Categories[Product.EnumCategories.POSTERS],"Description 3"))

export default {products:products}