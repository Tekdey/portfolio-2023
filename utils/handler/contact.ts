interface Body {
    firstname: string;
    lastname: string;
    email: string;
    subject: string;
    message: string;
}
interface Error {
    name: string;
    message: string;
    code?: number;
    stack?: string;
}


export default class ContactHandler {
    body;
    requiredValues;
    constructor(body: Body){
        this.body = body;
        this.requiredValues = ["firstname", "lastname", "email", "subject", "message"];
    }
    public check(){
        if(this.body.constructor.name !== "Object"){
            this._createError(403, "Object must be provided")
        }
        const keys = Object.entries(this.body);
        const _temp = new Array(); 
         
        keys.forEach(([key, value]) => {
            if(!this.requiredValues.includes(key)){
                this._createError(403, `${key} is not allowed`);
            }else{
                if(typeof value !== "string"){
                    this._createError(403, `${key} doit être de type string`);
                }
                if(value.length < 3 || !value.length){
                    this._createError(403, `${key} doit contenir au moins 3 caracteres.`);
                }
                if (key == "email" && !/^[a-zA-Z0-9_\.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/.test(value)) {
                    throw new Error("Veuillez entrer un email valide");
                }
                if(key !== "email"){
                    this._sanitizeString(key, value);
                }
                _temp.push(key);
            }
        });
        if(_temp.length !== this.requiredValues.length){
            throw new Error(`Les clés suivantes sont require : [${this.requiredValues}]`);
        }
        

        return this.body;
    }
    private _sanitizeString(key: string, str: string) {
    str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
    this.body = {...this.body, [key]: str.trim()};
    }
    private _createError(status: number, message: string){
        let error: Error = new Error(message);
        error.code = status;
        throw error;
    }   
}