import React,{ useState } from 'react';
import MainLayout from "../Layouts/Main";
import { useParams } from 'react-router-dom';
import { apiRoute } from '../../APIGateway/config'
import axios from 'axios';

const Page = () =>{
    const {numMecanografico,idProva} = useParams()
    const [resolucoes,setResolucoes] = useState(null)

    React.useEffect(()=>{
        async function getResolucoes() {
            var response = await axios.get(apiRoute(`/provas/resolucoes/aluno/${numMecanografico}/${idProva}`))
            console.log(response)
            setResolucoes(response.data)
        }
        getResolucoes();
    },[])

    if(resolucoes!=null){
        return(
            <>
                {
                    resolucoes.map((resolucoes)=>{
                       return <p>{JSON.stringify(resolucoes)}</p>})
                }
            </>
        )
    }else{
        return(
            <>
                <div>Ainda não é possível observar as provas que você realizou.Tente mais tarde.</div>
            </>
        )
    }
}
const ClassificationsDetailsPage = () =>{
    return <MainLayout pagina={<Page />}/>
}

export default ClassificationsDetailsPage;