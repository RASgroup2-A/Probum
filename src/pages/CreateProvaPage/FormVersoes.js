import React from "react"

class VersaoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            horario:   props.horario,
            provaData: props.provaData,
            numVersao: props.numVersao,
            questoes:  []
        };
    }

    render() {
        return (
            <>
            <table>
                <tbody>
                    
                </tbody>
            </table>
            </>
        )
    }
}

const FormVersoes = ({ currentDisplay, setDisplay, provaData }) => {
    const NewTH = ({ children }) => (<th className="text-left">{children}</th>)
    const NewTD = ({ children }) => (<td><div className="ml-4">{children}</div></td>)
    return (
        <div style={{ display: currentDisplay }}>
            <table>
                <tbody>
                    <tr>
                        <NewTH>Nome da prova:</NewTH>
                        <NewTD>{provaData.nome}</NewTD>
                    </tr>
                    <tr>
                        <NewTH>Unidade curricular:</NewTH>
                        <NewTD>{provaData.unidadeCurricular}</NewTD>
                    </tr>
                    <tr>
                        <NewTH>Retrocesso nas questões:</NewTH>
                        <NewTD>{provaData.retrocesso ? "Sim" : "Não"}</NewTD>
                    </tr>
                    <tr>
                        <NewTH>Aleatorização da ordem de questões:</NewTH>
                        <NewTD>{provaData.aleatorizacao ? "Sim" : "Não"}</NewTD>
                    </tr>
                    <tr>
                        <NewTH>Número de versões:</NewTH>
                        <NewTD>{(provaData.horarios || []).length.toString()}</NewTD>
                    </tr>
                </tbody>
            </table>

            <hr className="mt-2 border-2" />

            {/* //!DEBUG */}
            <div>
                {(provaData.horarios || []).map((horario, index) => (
                    <div>{JSON.stringify(horario)}</div>
                ))}
            </div>

        </div>
    )
}

export default FormVersoes;