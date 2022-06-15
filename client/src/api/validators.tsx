import { ApiResponse } from "../models/ApiResponse";
import { AppUser } from "../models/user";

export const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

export function isValidEmail(email:string) : boolean{
    if (email.length > 0 && email.match(pattern))
        return true
    else return false
}

export function isValidPassword(password:string) : boolean{
    if (password.length >= 6 && password.toLowerCase() !== password)
        return true
    else return false
}



export function isValidUser(user:AppUser) : string {
    const errors = []
    if(!isValidEmail(user.email))
        errors.push("Email invalid.")

    if(!isValidPassword(user.password))
        errors.push("Password invalid, must contain atleast 6 digit and uppercase digit")    

    return errors.join('\n')         
    }

export function isValidResponse<T>(res:ApiResponse<T>) : boolean {
    if(res.err) {
        return false
    }
    else if(res.content) {
        return true
    }
    return false
}