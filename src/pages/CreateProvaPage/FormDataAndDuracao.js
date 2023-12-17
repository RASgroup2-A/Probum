import React, { useState } from 'react';

const FormularioDataAndDuracao = ({ currentDisplay, setDisplay, setProvaData }) => {
    const [dataHoraProva, setDataHoraProva] = useState('');
    const [duracaoProva, setDuracaoProva] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setProvaData({
            dataHoraPreferencia: dataHoraProva,
            duracao: duracaoProva
        });
    };

    return (
        <div style={{display: currentDisplay}}>
            <form >
                <div className="sm:col-span-4">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                        Data e hora da prova
                    </label>
                    <div className="mt-2 mb-4">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                id="dataHoraProva"
                                type="datetime-local"
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                value={dataHoraProva}
                                onChange={(e) => setDataHoraProva(e.target.value)}
                                min={new Date().toISOString().slice(0,19)}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="sm:col-span-4">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                        Duração da prova (em minutos)
                    </label>
                    <div className="mt-2 mb-4">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                id="duracaoProva"
                                type="number"
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                value={duracaoProva}
                                onChange={(e) => setDuracaoProva(e.target.value)}
                                min="1"
                                required
                            />
                        </div>
                    </div>
                </div>
                <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submeter
                </button>
            </form>
        </div>
    );
};

export default FormularioDataAndDuracao;
