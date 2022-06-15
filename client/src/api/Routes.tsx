export const base = "http://localhost:3001"

export const authRoutes = {
        allUsers: '/users/allUsers',
        loginUser: '/users/login',
        addUser: '/users/'
    }
export const vacationsRoutes = {
        addVacation: '/vacations/',
        updateVacation: '/vacations/updatevacation/',
        deleteVacation: '/vacations/deletevacation/',
        getVacationById: '/vacations/getvacation/',
        getVacations: '/vacations/getvacations'

    }
export const followersRoutes = {
        addFollower: '/followers/',
        deleteFollower: '/followers/unfollow/',
        getVacationsFollowedByUser: '/followers/getvacations/'
    }
