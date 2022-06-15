import axios from "axios";
import { ApiResponse } from "../../models/ApiResponse";
import { AppUser } from "../../models/user";
import { authRoutes, base } from "../Routes";
import { isValidUser } from "../validators";






export async function registerUser(user: AppUser): Promise<ApiResponse<AppUser>> {
    const validate = isValidUser(user)
    if (validate.length === 0)
        return await axios.post(base + authRoutes.addUser, { "firstName": user.firstName, "lastName": user.lastName, "email": user.email, "password": user.password })
            .then(res => {
                const response = res.data as ApiResponse<AppUser>
                return response
            }).catch(err => ({ err: "email already exist", content: null }))
    else return { content: null, err: validate }
}


export async function loginUser(user: { email: string, password: string }): Promise<ApiResponse<AppUser>> {
    return await axios.post(base + authRoutes.loginUser, { "email": user.email, "password": user.password })
        .then(res => {
            const response = res.data as ApiResponse<AppUser>
            return response;
        }).catch(err => ({ err: err, content: null }))
}