import React, { useState } from 'react';
import MainLayout from "../Layouts/Main";
import FormProvaNameAndAlunos from "./FormProvaNameAndAlunos";

import Cookies from 'js-cookie';
import FormularioDataAndDuracao from './FormDataAndDuracao';

const Page = () => {
    //> Dados de autenticação para saber quem é o docente que está a criar a prova
    const cookieToken = Cookies.get('token') ? Cookies.get('token') : '{"numMecanografico": "none"}';
    const token = JSON.parse(cookieToken)

    //> Informações da prova em memória
    const [prova, setProva] = useState({
        nome: '',
        docentes: [token.numMecanografico],
        unidadeCurricular: '',
        retrocesso: false,
        versoes: []
    })

    const setProvaData = (data) => {
        Object.keys(data).forEach((campo) => {
            prova[campo] = data[campo]
        })
    }

    //> Dados da interface gráfica
    const [displayForm1, setDisplayForm1] = useState('block') //> para controlar a visibilidade do formulário de nome de prova e alunos
    const [displayForm2, setDisplayForm2] = useState('none') //> para controlar a visibilidade do formulário da data+hora e duração da prova
    return (<>
        <h1 className="text-5xl mb-8">Criar prova</h1>
        {/*//> Formulário de nome de prova e ficheiro de alunos */}
        <FormProvaNameAndAlunos 
            setProvaData={setProvaData}  //> altera os dados da prova em memória
            currentDisplay={displayForm1}
            setDisplay={setDisplayForm1} 
            nextDisplay={setDisplayForm2}
        />
        {/*//> Formulário de nome data+hora e duracao da prova*/}
        <FormularioDataAndDuracao 
            setProvaData={setProvaData}  //> altera os dados da prova em memória
            currentDisplay={displayForm2}
            setDisplay={setDisplayForm2}
            provaData={prova}
        />
    </>)
}

const CreateProvaPage = () => {
    return (
        <MainLayout pagina={<Page />} />
    )
}

export default CreateProvaPage;