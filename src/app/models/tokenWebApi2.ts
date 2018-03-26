export class TokenWebApi2{
    access_token : string
    roleName : string
    userName : string
    expires_in : number
    token_type : string
    
    public issuedDate : Date
    public expirationDate : Date

    constructor(data?:any){
        if(data){
            this.access_token = data.access_token
            this.roleName = data.roleName
            this.userName = data.userName
            this.expires_in = data.expires_in
            this.token_type = data.token_type
        }
    }

    public setExpirationDate(val:string){
        this.expirationDate = new Date(val);
    }

    public setIssuedDate(val:string){
        this.issuedDate = new Date(val);
    }

    public get isTokenValid():boolean{
        return this.access_token != undefined && this.access_token.length > 0;
    }

    public get isExpired():boolean{
        if(this.expirationDate){
            return new Date(Date.now()) > this.expirationDate;
        }else{
            return false;
        }
    }
}