import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setAppUser, useAppDispatch, useAppSelector } from "../../redux/store";
import "./Header.css";

const Header = () => {

    const [firstName, setFirstName] = useState('');
    const AppUser = useAppSelector(state => state.userReducer)
    const [isAdmin, setIsAdmin] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const dispatch = useAppDispatch();


    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) { axios.defaults.headers.common['Authorization'] = token; }

        if (AppUser && AppUser.firstName) {
            setFirstName(AppUser.firstName);
            setIsUser(true);
        }
        if (AppUser?.isAdmin == "admin") {
            setIsAdmin(true);
        }
        else {
            let user = JSON.parse(localStorage.getItem('user') || '{}');
            if (user != '{}') {
                dispatch(setAppUser(user))
            }
        }
    }, [])

    const doLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.reload();


    }


    return <div className="header">
        <div className="top-page">
            <span className='headline'><h1>Plan Your Next Vacation</h1></span>
            <span className='user-welcome'>Welcome {firstName}</span>
        </div>
        <div className="header-topnav">
            <Link to='/'><h2>Home</h2></Link>
            <Link to='/register'><h2>Register</h2></Link>
            {isUser
                ? <Link to='/' onClick={doLogout}><h2>Log Out</h2></Link>
                : <Link to='/login'><h2>Login</h2></Link>}

        </div>
        
    </div>
}

export default Header;