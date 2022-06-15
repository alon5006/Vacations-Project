import { FormLabel, Stack, TextField, Button } from "@mui/material";
import '../Auth.css'
import { formBoxStyle, formButton, formInputStyle } from '../../styles/styles'
import { useEffect, useState } from 'react'
import { AppUser } from '../../../models/user'
import SectionTitle from "../../styles/SectionTitle";
import { Link } from "react-router-dom";
//import { getAllUsers } from "../../api/auth";
import { setAppUser } from '../../redux/store'
import { useNavigate } from 'react-router'
import { connect, useSelector } from "react-redux";
import { StoreReducers, useAppSelector, useAppDispatch } from "../../redux/store";
import { loginUser } from '../../../api/auth/index';
import Header from "../../LayoutSection/Header/Header";
import axios from "axios";

export default function Login() {

    const [user, setUser] = useState<AppUser>({
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        isAdmin: 'user',
        token: ''
    })


    const AppUser = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setAppUser(user));
        localStorage.setItem('user', JSON.stringify(user));
        let token: any = 'Bearer ' + user.token;
        axios.defaults.headers.common['Authorization'] = token;
        localStorage.setItem('token', token);
        connect(token);
    }, [user])

    const updateUserEmail = (email: string) => {
        setUser({ ...user, ...{ email: email } })
    }

    const updateUserPassword = (password: string) => {
        setUser({ ...user, ...{ password: password } })
    }

    const updateLoginData = (res: object) => {
        const newData = { ...user, ...({ ...res }) }
        setUser(newData);
    }

    const nav = useNavigate();



    const doLogin = () => {
        loginUser(user)
            .then(res => {
                if (res.err) {
                    alert("Wrong login details")
                }
                else {
                    console.log({ ...res });
                    updateLoginData(res);
                    nav('/');
                }
            })
    }


    return <div className="form_holder">
        <Header />
        <SectionTitle title={'Login'} />
        <Stack
            style={formBoxStyle}
            spacing={1}>
            <Stack spacing={1}>
                <FormLabel>{'Email Address'}</FormLabel>
                <TextField
                    onChange={(e) => { updateUserEmail(e.target.value) }}
                    style={formInputStyle}
                    placeholder={'Enter Email Address'} />
            </Stack>
            <Stack spacing={1}>
                <FormLabel>{'Password'}</FormLabel>
                <TextField
                    type={'password'}
                    onChange={(e) => { updateUserPassword(e.target.value) }}
                    style={formInputStyle}
                    placeholder={'Enter Password'} />
            </Stack>
            <Button

                onClick={doLogin}

                style={formButton}>
                {'Login'}
            </Button>


            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                <hr style={{ width: '20%', borderWidth: '.1px', borderColor: 'gray', height: '1px' }} />
                <label>{'OR'}</label>
                <hr style={{ width: '20%', borderWidth: '.1px', borderColor: 'gray', height: '1px' }} />
            </Stack>
            <Link
                style={{ textDecoration: 'none', color: 'whitesmoke', fontSize: '14px', fontWeight: 'bold' }}
                to='/register'>{'Create new account'}</Link>
        </Stack>

    </div>
}
