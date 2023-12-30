import {React} from 'react'
import './ProvaCard.css'

export default function ProvaCard({nome,uc,docentes}){
    return(
        <>
            <div className='prova-card'>
                <h3><b>Prova</b>: {nome}</h3>
                <p><b>Unidade Curricular</b>: {uc}</p>
                <p><b>Docentes</b>: {docentes.map((docente)=>{return docente})}</p>
            </div>
        </>
    )
}