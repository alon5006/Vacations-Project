import VacationCard from "../VacationCard/VacationCard"
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Vacation } from '../../../models/vacation';
import "./VacationsContainer.css";
import { StoreReducers, useAppSelector, useAppDispatch, setAppUser } from "../../redux/store";
import { setVacation } from '../../redux/store'
import { Link, useNavigate } from "react-router-dom";
import { deleteVacationById, getAllVacations, getVacationById } from "../../../api/vacations/vacations";
import { addFollower, deleteFollower, getAllVacationsFollowedByUser } from "../../../api/followers/followers";


const VacationsContainer = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [vacationBool, setVacationBool] = useState(false);
    const AppUser = useAppSelector(state => state.userReducer)
    const [vacationsFollowed, setVacationsFollowed] = useState<number[] | undefined>()
    const [vacations, setVacations] = useState<Vacation[] | undefined>()
    const [vacation, setVacationState] = useState<Vacation>({
        id: 0,
        destination: '',
        startDate: '',
        endDate: '',
        price: '',
        description: '',
        image: '',
        amountOfFollowers: 0
    })
    const nav = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user') || '{}');
        if (user != '{}') {
            dispatch(setAppUser(user))
        }
        getVacations();
        if (AppUser?.isAdmin == "admin") {
            setIsAdmin(true);
        }
        if (AppUser?.email && AppUser?.isAdmin == "user") {
            setIsUser(true);
        }
        dispatch(setVacation(vacation));
    }, [vacation, vacationBool])



    // Get All Vacations
    const getVacations = () => {
        getAllVacations()
            .then(res => {
                if (AppUser?.email && AppUser?.isAdmin == "user") {
                    getVacationsFollowedByUser(res)
                }
                else {
                    setVacations(res)
                }
            }).catch(e => ({ err: e, content: null }))
    }


    // User - Get Vacations Followed By User
    const getVacationsFollowedByUser = (vacationsFromServer: Vacation[]) => {
        setVacationsFollowed([0])
        if (AppUser) {
            getAllVacationsFollowedByUser(AppUser?.id).then(res => {
                let followedVacationsByUser = res;
                let likedVacationsSet = new Set();
                let likedVacationsArr: number[] = [];
                for (let followedVacation of followedVacationsByUser) {
                    likedVacationsSet.add(followedVacation.vacationId);
                    likedVacationsArr.push(followedVacation.vacationId)
                }
                setVacationsFollowed(likedVacationsArr)
                if (vacationsFromServer) {
                    vacationsFromServer.sort((vacationA, vacationB) => {
                        if (likedVacationsSet.has(vacationA.id)) {
                            return -1;
                        }

                        if (likedVacationsSet.has(vacationB.id)) {
                            return 1;
                        }
                        return 0
                    })
                    setVacations(vacationsFromServer);
                }
            })
        }
    }


    // User - Follow\Unfollow Vacation
    const followUnfollowVacation = (vacationId: number, e: any) => {
        if (isUser && AppUser) {
            addFollower(AppUser?.id, vacationId).then(res => {
                if (res) {
                    deleteFollower(AppUser?.id, vacationId)
                }
                else{
                }
            }).catch(e => ({ err: e, content: null }))
            setVacationBool(!vacationBool);
        }
    }



    // Admin - Delete Vacation
    const deleteVacation = (vacationId: number) => {
        deleteVacationById(vacationId);
    }

    // Admin - Edit Vacation
    const editVacation = (vacationId: number) => {
        getVacationById(vacationId).then(res => {
            setVacationState({ ...vacation, ...({ ...res }) });
            nav("/editvacation")
        }).catch(e => ({ err: e, content: null }))
    }


    return (
        <div>
            <div>{isAdmin && <Link to='/addvacation'><h2>Add Vacation</h2></Link>}</div>
            <div>{isAdmin && <Link to='/admincharts'><h2>Charts</h2></Link>}</div>
            <div className="card-container">
                {vacations?.map((vacation, index) => (<VacationCard key={index} id={vacation.id} destination={vacation.destination} startDate={vacation.startDate} endDate={vacation.endDate}
                    price={vacation.price} description={vacation.description} image={vacation.image} amountOfFollowers={vacation.amountOfFollowers} vacationsFollowedArr={vacationsFollowed} onUserLikeUnlikeVacation={followUnfollowVacation}
                    onAdminDeleteVacation={deleteVacation} onAdminEditVacation={editVacation} />))}
            </div>

        </div >

    )
}
export default VacationsContainer;




