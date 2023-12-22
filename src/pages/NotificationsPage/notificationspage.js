import React from 'react';
import MainLayout from "../Layouts/Main";
import NotificationItem from "../../components/Notification/notificationitem"
import { useParams } from 'react-router-dom';

const Page = () => {
    const {numMecanografico} = useParams() //numero de aluno

    return (
        <>
            <NotificationItem message="ola1"/>
            <NotificationItem message="ola2"/>
            <NotificationItem message="ola3"/>
        </>
    )
}

const NotificationsPage = () => {
        return (
            <MainLayout pagina={<Page />}/>
        )
}    

export default NotificationsPage;