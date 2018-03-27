export class Buyer{
    id : string
    UserName : string
    Email : string

    constructor()
    constructor(id? : string, UserName? : string, Email? : string){
        this.id = id
        this.UserName = UserName
        this.Email = Email
    }
}