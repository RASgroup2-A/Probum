import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Cookies from 'js-cookie';

import LoginPage from "./pages/LoginPage/Main";
import CreateProvaPage from "./pages/CreateProvaPage/Main";
import HomeStudentPage from "./pages/HomeStudentPage/Main";
import NotificationsPage from "./pages/NotificationsPage/notificationspage";
import RegisterPage from "./pages/RegistationPage/registationpage";
import EditPerfilPage from "./pages/EditPerf/editperfpage";
import AddRoomsPage from "./pages/AddRoomsPage/AddRooms";
import RemoveRoomsPage from "./pages/RemoveRoomsPage/RemoveRooms";
import ManageRoomsPage from "./pages/ManageRoomsPage/ManageRooms";

const isAuthenticated = (type = 'docente') => {
    const cookieToken = Cookies.get('token') || '{"type": "none"}';
    const token = JSON.parse(cookieToken)
    return token.type === type;
};


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/notificacoes/:numMecanografico" element={<NotificationsPage />} />
                <Route path="/homealuno/:numMecanografico" element={<HomeStudentPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/criarprova"  element={isAuthenticated() ? <CreateProvaPage /> : <Navigate to="/login" />}/>
                <Route path="/editPerf" element={isAuthenticated() ? <EditPerfilPage /> : <Navigate to="/login" />}/>
                {/* <Route path="/classificarprovas" element={} /> */}
                <Route path="*" element={<Navigate to="/login" />}/>
                <Route path="/gerirsalas" element={<ManageRoomsPage />} />
                <Route path="/adicionarsalas" element={<AddRoomsPage />} /> 
                <Route path="/removersalas" element={<RemoveRoomsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
