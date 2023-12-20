
const AssociacaoVersoesHorarios = ({ currentDisplay, setDisplay, provaData }) => {
    return (
        <div style={{display: currentDisplay}}>
            <table>
                <tbody>
                    <tr>
                        <td><strong>Nome da prova:</strong></td>
                        <td>{provaData.nome}</td>
                    </tr>
                    <tr>
                        <td><strong>Unidade curricular:</strong></td>
                        <td>{provaData.unidadeCurricular}</td>
                    </tr>
                    <tr>
                        <td><strong>Retrocesso nas questões:</strong></td>
                        <td>{provaData.retrocesso ? "Sim" : "Não"}</td>
                    </tr>
                    <tr>
                        <td><strong>Aleatorização da ordem de questões:</strong></td>
                        <td>{provaData.aleatorizacao ? "Sim" : "Não"}</td>
                    </tr>
                    <tr>
                        <td><strong>Número de versões:</strong></td>
                        <td>{(provaData.horarios || []).length.toString()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AssociacaoVersoesHorarios;