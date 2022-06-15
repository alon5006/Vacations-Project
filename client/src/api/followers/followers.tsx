import axios from "axios";
import { followersRoutes, base } from "../Routes";


export async function addFollower(userId:number, vacationId:number) {

    return await axios.post(base + followersRoutes.addFollower, {
        "userId": userId, "vacationId": vacationId
    })
        .then(res => {
            const response = res.data 
            return response
        }).catch(err => ({ err: err, content: null }))
}

export async function deleteFollower(userId:number, vacationId:number){
    return await axios.post(base + followersRoutes.deleteFollower, {
        "userId": userId, "vacationId": vacationId
    })
    .then(res => {
        const response = res.data 
        return response
    }).catch(err => ({ err: err, content: null }))

}

export async function getAllVacationsFollowedByUser(id: number) {
    return await axios.get(base + followersRoutes.getVacationsFollowedByUser + id)
        .then(res => {
            const response = res.data
            return response
        }).catch(err => ({ err: err, content: null }))

}


