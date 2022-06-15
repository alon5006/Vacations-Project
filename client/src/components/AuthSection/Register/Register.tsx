import { FormLabel, Stack, TextField, Button } from "@mui/material";
import '../Auth.css'
import { formBoxStyle, formButton, formInputStyle } from '../../styles/styles'
import { useEffect, useState } from 'react'
import { AppUser } from '../../../models/user'
import SectionTitle from "../../styles/SectionTitle";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router'
import { registerUser } from "../../../api/auth";
import { useDispatch, useSelector } from "react-redux";
import { setAppUser, StoreReducers, useAppDispatch, useAppSelector } from "../../redux/store";
import Header from "../../LayoutSection/Header/Header";

export default function Register() {


    const [user, setUser] = useState<AppUser>({
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        isAdmin: 'user',
        token: ''
    })

    const updateUserFirstName = (firstName: string) => {
        setUser({ ...user, ...{ firstName: firstName } })
    }
    const updateUserLastName = (lastName: string) => {
        setUser({ ...user, ...{ lastName: lastName } })
    }
    const updateUserEmail = (email: string) => {
        setUser({ ...user, ...{ email: email } })
    }
    const updateUserPassword = (password: string) => {
        setUser({ ...user, ...{ password: password } })
    }


    const dispatch = useAppDispatch()
    const nav = useNavigate()
    const appUser = useAppSelector(state => state.userReducer)
    const doRegistration = () => {
        registerUser(user)
            .then(res => {
            if (res.err) {
                alert(res.err)
            } else {
                dispatch(setAppUser(user))
                nav('/login')
            }
        })
}

return <div className="form_holder">
    <Header />
    <SectionTitle title={'Register'} />
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
                onChange={(e) => { updateUserPassword(e.target.value) }}
                style={formInputStyle}
                placeholder={'Enter Password'} />
        </Stack>
        <Stack spacing={1}>
            <FormLabel>{'First Name'}</FormLabel>
            <TextField
                onChange={(e) => { updateUserFirstName(e.target.value) }}
                style={formInputStyle}
                placeholder={'Enter First Name'} />
        </Stack>
        <Stack spacing={1}>
            <FormLabel>{'Last Name'}</FormLabel>
            <TextField
                onChange={(e) => { updateUserLastName(e.target.value) }}
                style={formInputStyle}
                placeholder={'Enter Last Name'} />
        </Stack>

        <Button
            onClick={doRegistration}
            style={formButton}>
            {'Register'}
        </Button>

        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
            <hr style={{ width: '20%', borderWidth: '.1px', borderColor: 'gray', height: '1px' }} />
            <label>{'OR'}</label>
            <hr style={{ width: '20%', borderWidth: '.1px', borderColor: 'gray', height: '1px' }} />
        </Stack>
        <Link
            style={{ textDecoration: 'none', color: 'whitesmoke', fontSize: '14px', fontWeight: 'bold' }}
            to='/login'>{'Already have an account?'}</Link>
    </Stack>

</div>
}