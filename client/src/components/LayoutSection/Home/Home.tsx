import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Vacation } from '../../../models/vacation';
import { setAppUser, useAppDispatch, useAppSelector } from '../../redux/store';
import VacationsContainer from '../../VacactionsSection/VacationsContainer/VacationsContainer'
import Header from '../Header/Header';
import "./Home.css";


const Home = () => {
    const AppUser = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch();
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user != '{}') {
        dispatch(setAppUser(user))
    }
  


return <div className="home">
    <Header />
    <VacationsContainer />
</div>
}

export default Home;


