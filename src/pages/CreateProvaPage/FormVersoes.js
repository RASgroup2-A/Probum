import React from "react"

class VersaoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            horario: props.horario,
            provaData: props.provaData,
            numVersao: props.numVersao,
            questoes: []
        };
    }
    
    render() {
        
        const NewTH = ({ children }) => (<th className="text-left">{children}</th>)
        const NewTD = ({ children }) => (<td><div className="ml-4">{children}</div></td>)
        return (
            <>
                <div className="text-2xl mt-4"><b>Versão n.º {this.state.numVersao}</b></div>
                <table className="mt-4">
                    <tbody>
                        <tr>
                            <NewTH>Edifício:</NewTH>
                            <NewTD>{this.state.horario.edificio}</NewTD>
                        </tr>
                        <tr>
                            <NewTH>Sala:</NewTH>
                            <NewTD>{this.state.horario.numSala}</NewTD>
                        </tr>
                        <tr>
                            <NewTH>Piso:</NewTH>
                            <NewTD>{this.state.horario.piso}</NewTD>
                        </tr>
                        <tr>
                            <NewTH>Capacidade:</NewTH>
                            <NewTD>{this.state.horario.capacidade}</NewTD>
                        </tr>
                        <tr>
                            <NewTH>Alunos:</NewTH>
                            <NewTD>{`${this.state.horario.alunos.length} alunos`}</NewTD>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <strong className="text-2xl">Questões</strong>
                </div>

                <hr />
            </>
        )
    }
}

const FormVersoes = ({ currentDisplay, setDisplay, provaData }) => {
    const NewTH = ({ children }) => (<th className="text-left">{children}</th>)
    const NewTD = ({ children }) => (<td><div className="ml-4">{children}</div></td>)
    let formsVersoes = (provaData.horarios || []).map((horario, index) => (
        //! é feito desta maneira para depois se poder utilizar métodos internos ao componente
        new VersaoForm({horario: horario, provaData: provaData, numVersao: index+1})
    ))
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

            <div>
                {formsVersoes.map((componentObject, i) => componentObject.render())}
            </div>
        </div>
    )
}

export default FormVersoes;