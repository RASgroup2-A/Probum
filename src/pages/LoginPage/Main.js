//> Página de login
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

import { apiRoute } from '../../APIGateway/config'
import ModalInfo from '../../components/Modals/ModalInfo';

//import NotificationCard from '../../components/Notification/notification';
//import io from 'socket.io-client';


async function sendLoginData(email, password) {
    const userLoginData = {
        email: email,
        password: password
    }
    return (await axios.post(apiRoute('/login'), userLoginData)).data;
}

const LoginPage = () => {

    //> Informação para ser apresentada no modal
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    //const [notification, setNotification] = useState('');                        //state set do texto da notificacao
    //const [notificationVisibility, setnotificationVisibility] = useState(false); //state set da visibilidade da notificacao

    //> Função para apresentar o modal
    const modal = (title, message) => {
        setModalTitle(title);
        setModalMessage(message);
        setModalVisible(true);
    }

    //> Dados do formulário de login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //> Submete dados do formulário de login
    const handleSubmit = (e) => {
        e.preventDefault();
        sendLoginData(email, password)
            .then((result) => {
                Cookies.set('token', result.token); //> define o cookie "token" para ser usado na autenticação
                window.location = '/criarprova' //! redirecciona para a rota /criarprova, VAI TER DE SER ALTERADO PORQUE ISTO VAI TER DE ALBERGAR ALUNOS
            }).catch((err) => {
                modal('Acesso negado', err.response.data.msg);
            });
    };

/*
    //websocket para ficar à escuta de notificacoes (suposto colocar só depois do login e nas paginas correspondentes ao aluno- coloquei no login apenas para testar)
    const socket = io('http://localhost:8877?numero=a97223'); // concatenar o número do aluno atual (está hardcoded)
        socket.on('notification', (message) => {
            setNotification(message);
            setnotificationVisibility(true);
    });

    const closeNotification = () => {
        setnotificationVisibility(false);
    }
*/
    return (
        <>
            {/* <NotificationCard id="notificationcard" text={notification} visible={notificationVisibility} onClick={closeNotification} /> */}
            <ModalInfo title={modalTitle} message={modalMessage} isOpen={modalVisible} onRequestClose={() => setModalVisible(false)} />
            <div className="min-h-screen flex items-center justify-center">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="email"
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button typeof='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LoginPage;
