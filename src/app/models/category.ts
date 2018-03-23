export class Category{
    idCategory:number
    name:string
    constructor()
    constructor(idCategory:number,name:string)
    constructor(idCategory?:number,name?:string){
        this.idCategory = idCategory;
    }
}