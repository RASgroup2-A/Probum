import React from 'react';
import MainLayout from "../Layouts/Main";
import NotificationItem from "../../components/Notification/notificationitem"
import { useParams } from 'react-router-dom';
import { apiRoute } from '../../APIGateway/config'
import axios from 'axios';

const Page = () => {
    const {numMecanografico} = useParams() //numero de aluno
    const [dataNotifications,setdataNotifications]  = React.useState(); 
    

    React.useEffect(()=>{
        async function getNotifications() {
            var response = await axios.get(apiRoute(`/notifications/${numMecanografico}`))
            console.log(response)
            setdataNotifications(response)
        }
        getNotifications();
    },[])

    if (dataNotifications) {
        let a = JSON.stringify(dataNotifications.data.notificacoes);
        let notificacoes = dataNotifications.data.notificacoes;
//                    <td>{JSON.stringify(obj.notificacao.notificacao)}</td>
//        return <td>{JSON.stringify(obj.mensagem)}</td>

        return (
            <>
                {
                    notificacoes.map(obj=>{
                        return <NotificationItem title={obj.notificacao.notificacao} message={obj.mensagem}/>
                })
                
                }
            </>
        )
    }else{
        return <div></div>;
    }
}

const NotificationsPage = () => {
        return (
            <MainLayout pagina={<Page />}/>
        )
}    

export default NotificationsPage;