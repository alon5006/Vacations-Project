

import axios from "axios";
import { Vacation } from "../../models/vacation";
import { vacationsRoutes, base } from "../Routes";
import { ApiResponse } from "../../models/ApiResponse";


export async function getAllVacations() {
    return await axios.get(base + vacationsRoutes.getVacations)
        .then(res => {
            return res.data
        }).catch(e => ({ err: e, content: null }))
}

export async function addVacation(vacation: Vacation): Promise<ApiResponse<Vacation>> {
    return await axios.post(base + vacationsRoutes.addVacation, {
        "destination": vacation.destination, "startDate": vacation.startDate, "endDate": vacation.endDate, "price": vacation.price,
        "description": vacation.description, "image": vacation.image, "amountOfFollowers": vacation.amountOfFollowers
    })
        .then(res => {
            const response = res.data as ApiResponse<Vacation>
            return response
        }).catch(err => ({ err: err, content: null }))
    //     else return { content: null, err: validate }
}

export async function updateVacation(vacation: Vacation, id:any): Promise<ApiResponse<Vacation>> {
    //const validate = isValidUser(user)
    //if (validate.length === 0)
    return await axios.put(base + vacationsRoutes.updateVacation + id, {
        "destination": vacation.destination, "startDate": vacation.startDate, "endDate": vacation.endDate, "price": vacation.price,
        "description": vacation.description, "image": vacation.image
    })
        .then(res => {
            const response = res.data as ApiResponse<Vacation>
            return response
        }).catch(err => ({ err: err, content: null }))
    //     else return { content: null, err: validate }
}

export async function deleteVacationById(id: number): Promise<ApiResponse<Vacation>> {
    return await axios.delete(base + vacationsRoutes.deleteVacation + id)
        .then(res => {
            const response = res.data as ApiResponse<Vacation>
            return response
        }).catch(err => ({ err: err, content: null }))

}

export async function getVacationById(id: number) {
    return await axios.get(base + vacationsRoutes.getVacationById + id)
        .then(res => {
            const response = res.data
            return response
        }).catch(err => ({ err: err, content: null }))

}

