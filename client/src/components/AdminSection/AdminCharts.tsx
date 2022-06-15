import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAllVacations } from "../../api/vacations/vacations";
import { Vacation } from "../../models/vacation";
import { useAppSelector } from "../redux/store";
import { Chart } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { display } from "@mui/system";
import { render } from "react-dom";
import Header from "../LayoutSection/Header/Header";

const AdminCharts = () => {

    const [isAdmin, setIsAdmin] = useState(false);

    const AppUser = useAppSelector(state => state.userReducer)
    const [vacations, setVacations] = useState<Vacation[] | undefined>()
    const nav = useNavigate();
    const [labels, setLabels] = useState<string[]>([])
    const [amountOfFollowersData, setaAountOfFollowersData] = useState<number[]>([])
    const labelsArray: string[] = []
    const amountOfFollowersDataArray: number[] = []



    useEffect(() => {
        getVacations();
        if (AppUser?.isAdmin == "admin") {
            setIsAdmin(true);
        }
        else {
            nav('/');
        }
    }, [vacations])

    const getVacations = () => {
        getAllVacations()
            .then(res => {
                setVacations(res)
                getChartData()
            }).catch(e => ({ err: e, content: null }))
    }

    const getChartData = () => {
        if (vacations) {
            for (let vacation of vacations) {
                if (vacation.amountOfFollowers > 0) {
                    labelsArray.push(vacation.destination);
                    amountOfFollowersDataArray.push(vacation.amountOfFollowers)
                }
            }
            setLabels(labelsArray);
            setaAountOfFollowersData(amountOfFollowersDataArray);
        }
    }


    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Followers',
            },
        },
    };


    const data = {
        labels,
        datasets: [
            {
                label: 'Amount Of Followers',
                data: amountOfFollowersData,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }

        ],
    };


    return (
        <div >
            <Header/>
             <Bar options={options} data={data} />
        </div>
    )


}


export default AdminCharts;

