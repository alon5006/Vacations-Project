import Header from '../LayoutSection/Header/Header'
import { FormLabel, Stack, TextField, Button } from "@mui/material";
import { formBoxStyle, formButton, formInputStyle } from '../styles/styles';
import SectionTitle from "../styles/SectionTitle";
import { Vacation } from '../../models/vacation';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { updateVacation } from '../../api/vacations/vacations';
import { useAppDispatch, useAppSelector } from '../redux/store';

const EditVacation = () => {

    const ChosenVacation = useAppSelector(state => state.vacationReducer);

    useEffect(() => {
        updateStateVacation(ChosenVacation);
    }, [])

    const updateStateVacation = (chosenVacation:any) =>{
        setVacation({ ...vacation, ...{ id: chosenVacation.id, destination: chosenVacation.destination, startDate: chosenVacation.startDate, endDate: chosenVacation.endDate,
            price: chosenVacation.price, description: chosenVacation.description, image: chosenVacation.image }, })
    }

  
    const [vacation, setVacation] = useState<Vacation>({
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
    const [isAdmin, setIsAdmin] = useState(false);
    const AppUser = useAppSelector(state => state.userReducer)
    useEffect(() => {
        if (AppUser?.isAdmin == "admin") {
            setIsAdmin(true);
        }
        else {
            nav('/');
        }
    }, [])

 
    const updateVacationDestination = (destination: string) => {
        setVacation({ ...vacation, ...{ destination: destination } })
    }
    const updateVacationStartDate = (startDate: string) => {
        setVacation({ ...vacation, ...{ startDate: startDate.toString() } })
    }
    const updateVacationEndDate = (endDate: string) => {
        setVacation({ ...vacation, ...{ endDate: endDate.toString() } })
    }
    const updateVacationPrice = (price: string) => {
        setVacation({ ...vacation, ...{ price: price } })
    }
    const updateVacationdescription = (description: string) => {
        setVacation({ ...vacation, ...{ description: description } })
    }
    const updateVacationImage = (image: string) => {
        setVacation({ ...vacation, ...{ image: image } })
    }

    const doUpdateVacation = () => {
        updateVacation(vacation, ChosenVacation?.id);
             nav('/')
    }





    return (<div>
        <Header />
        <SectionTitle title={'Edit Vacation'} />
        <Stack
            style={formBoxStyle}
            spacing={1}>
            <Stack spacing={1}>
                <FormLabel>{'Vacation Destination'}</FormLabel>
                <TextField
                    value={vacation.destination}
                    onChange={(e) => { updateVacationDestination(e.target.value) }}
                    style={formInputStyle}
                    placeholder={'Vacation Destination'} />
            </Stack>
            <Stack spacing={1}>
                <FormLabel>{'From'}</FormLabel>
                <TextField
                    value={vacation.startDate}
                    type={'date'}
                    onChange={(e) => { updateVacationStartDate(e.target.value) }}
                    style={formInputStyle}
                    placeholder={'From'} />
            </Stack>
            <Stack spacing={1}>
                <FormLabel>{'To'}</FormLabel>
                <TextField
                    value={vacation.endDate}
                    type={'date'}
                    onChange={(e) => { updateVacationEndDate(e.target.value) }}
                    style={formInputStyle}
                    placeholder={'To'} />
            </Stack>
            <Stack spacing={1}>
                <FormLabel>{'Description'}</FormLabel>
                <TextField
                    value={vacation.description}
                    onChange={(e) => { updateVacationdescription(e.target.value) }}
                    style={formInputStyle}
                    placeholder={'Description'} />
            </Stack>
            <Stack spacing={1}>
                <FormLabel>{'Price'}</FormLabel>
                <TextField
                    value={vacation.price}
                    onChange={(e) => { updateVacationPrice(e.target.value) }}
                    style={formInputStyle}
                    placeholder={'Price'} />
            </Stack>
            <Stack spacing={1}>
                <FormLabel>{'Image Url'}</FormLabel>
                <TextField
                    value={vacation.image}
                    onChange={(e) => { updateVacationImage(e.target.value) }}
                    style={formInputStyle}
                    placeholder={'Image Url'} />
            </Stack>

            <Button
                onClick={doUpdateVacation}
                style={formButton}>
                {'Update Vacation'}
            </Button>
        </Stack>
    </div>
    )
}

export default EditVacation;


