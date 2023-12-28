import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { numMecanografico } from '../../auth/auth'
import MainLayout from '../Layouts/Main';
import Relogio from '../../components/Relogio/Relogio';

const ESCOLHA_MULTIPLA = 1
const VERDADEIRO_FALSO = 2

const QuestVF = ({questao, setResposta}) => {
    const [opcoesEscolhidas, setOpcoesEscolhidas] = useState([])

    const handleChangeVF = (e) => {

    }
}

const QuestEscMultipla = ({ questao, setResposta }) => {
    const [opcoesEscolhidas, setOpcoesEscolhidas] = useState([])

    const handleChangeCheckBox = (e) => {
        let re = /q(\d+)op(\d+)/
        let optionID = parseInt(re.exec(e.target.name)[2])
        if(e.target.checked){ //> Seleccionou a opção
            setOpcoesEscolhidas([...opcoesEscolhidas, optionID])
        } else { //> Desseleccionou a opção
            let newOpcoesEscolhidas = opcoesEscolhidas
            newOpcoesEscolhidas.splice(newOpcoesEscolhidas.indexOf(optionID),1)
            setOpcoesEscolhidas(newOpcoesEscolhidas)
        }
        setResposta(questao.id, opcoesEscolhidas)
    }

    return (
        <div>
            <p>{questao.descricao}</p>
            <p><strong>Cotação:</strong>{questao.cotacao}</p>
            <div>
                {questao.opcoes.map(opcao => {
                    <div key={opcao.id}>
                        <label>{opcao.texto}</label>
                        <input name={`q${questao.id}op${opcao.id}`} checked={opcao.id in opcoesEscolhidas} />
                    </div>
                })}
            </div>
        </div>
    )
}

const QuestaoForm = ({ questao, setResposta }) => {
    if (questao.tipo === ESCOLHA_MULTIPLA) {
        return <QuestEscMultipla questao={questao} setResposta={setResposta}/>
    } else if (questao.tipo === VERDADEIRO_FALSO) {
        return <QuestVF questao={questao} setResposta={setResposta}/>
    }
}

const Page = ({ provaData }) => {
    const [indiceQuestaoVisivel, setIndiceQuestaoVisivel] = useState(0)
    const [questaoVisivel, setQuestaoVisivel] = useState(null)
    const [resolucao, setResolucao] = useState({
        idAluno: numMecanografico(),
        idProva: provaData._id,
        idVersao: provaData.versao.id,
        respostas: provaData.versao.questoes.map(questao => {
            return {
                idQuestao: questao.id,
                cotacao: 0,
                respostaAberta: "",
                opcoesEscolhidas: []
            }
        })
    })

    const setResposta = (idQuestao, resposta) => {
        let indiceRespostas = resolucao.respostas.findIndex(resp => resp.idQuestao === idQuestao)
        let respostaNaLista = resolucao.respostas[indiceRespostas]
        respostaNaLista.opcoesEscolhidas = resposta.opcoesEscolhidas || []
        respostaNaLista.respostaAberta = resposta.respostaAberta || ""
        let novaListaRespostas = [
            ...resolucao.respostas.slice(0,indiceRespostas), 
            respostaNaLista,
            ...resolucao.respostas.slice(indiceRespostas+1,resolucao.respostas.length)
        ]
        setResolucao({...resolucao, respostas: novaListaRespostas})
    }

    const avancarQuestao = () => {
        setIndiceQuestaoVisivel(indiceQuestaoVisivel+1)
        setQuestaoVisivel(provaData.versao.questoes[indiceQuestaoVisivel])
    }

    const retrocederQuestao = () => {
        setIndiceQuestaoVisivel(indiceQuestaoVisivel+1)
        setQuestaoVisivel(provaData.versao.questoes[indiceQuestaoVisivel])
    }

    return (<>
        <p>Início: {provaData.data}, hora actual: <Relogio /></p>
        
    </>)
}

const RealizarProva = () => {
    let { state } = useLocation();
    return (<MainLayout pagina={<Page provaData={state} />} />)
}

export default RealizarProva