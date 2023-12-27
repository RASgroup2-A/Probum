import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import MainLayout from "../Layouts/Main"

const QuestaoForm = ({questao}) => {
    
}

const Page = ({ idProva }) => {
    const [resolucao, setResolucao] = useState({
        idAluno: '',
        idProva: idProva,
        idVersao: '',
        respostas: []
    })

    const addResposta = (resposta) => {
        let newRespostas = [...resolucao.respostas, resposta]
        setResolucao({...resolucao, respostas: newRespostas});
    }

    const editResposta = (resposta, index) => {
        let newRespostas = [...resolucao.respostas.slice(0,index), resposta, ...resolucao.respostas.slice(index+1,resolucao.respostas.length)]
        setResolucao({...resolucao, respostas: newRespostas})
    }
    
}

const RealizarProvaPage = () => {
    const { idProva } = useParams()
    return <MainLayout pagina={<Page idProva={idProva} />} />
}

export default RealizarProvaPage;