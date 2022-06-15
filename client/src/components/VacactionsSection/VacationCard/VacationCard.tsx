import { ClassNames } from "@emotion/react";
import { faHeart, faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Vacation } from "../../../models/vacation";
import { useAppSelector } from "../../redux/store";
import "./VacationCard.css"

const VacationCard = (props: any) => {

    const AppUser = useAppSelector(state => state.userReducer)
    const [isAdmin, setIsAdmin] = useState(false);
    const [isVacationFollowed, setIsVacationFollowed] = useState(false);
    const vacationsFollowed = props.vacationsFollowedArr;

    useEffect(() => {
        if (AppUser?.isAdmin == "admin") {
            setIsAdmin(true);
        }
        if (AppUser?.email && AppUser?.isAdmin == "user" && vacationsFollowed) {
            for (let vacationFollowed of vacationsFollowed) {
                if (vacationFollowed == props.id) {
                    setIsVacationFollowed(true);
                }
            }
        }
    }, [props])


    return (
        <div className="card">
            <div className="card-headline">{props.destination}</div>
            <div className="card-description">{props.description}</div>
            <div className="card-dates"><span>{props.startDate}</span> - <span>{props.endDate}</span></div>
            <div className="card-image-div" ><img className="card-image" src={props.image} alt="Image" /></div>
            <div className="card-price">{props.price}</div>

            {isAdmin
                ? <div className="card-editing"> <span ><FontAwesomeIcon onClick={() => { props.onAdminEditVacation(props.id) }} className="card-pencil-icon fa-xl" icon={faPencil} /></span>
                    <span ><FontAwesomeIcon onClick={() => { props.onAdminDeleteVacation(props.id) }} className="card-trash-icon fa-xl" icon={faTrash} /></span>
                    <span className="card-followers on">{props.amountOfFollowers} followers</span>
                </div>
                : <div>
                    <span ><FontAwesomeIcon onClick={(e) => { props.onUserLikeUnlikeVacation(props.id, e) }} className={isVacationFollowed ? "card-like-icon fa-xl heart-on" : "card-like-icon fa-xl"} icon={faHeart} /></span>
                    <span className="card-followers">{props.amountOfFollowers} followers</span>
                </div>
            }
        </div>

    )
}

export default VacationCard;