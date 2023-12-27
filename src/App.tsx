import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { isAuthenticated, isDocente, isAluno, numMecanografico } from "./auth/auth"
import LoginPage from "./pages/LoginPage/Main";
import CreateProvaPage from "./pages/CreateProvaPage/Main";
import HomeStudentPage from "./pages/HomeStudentPage/Main";
import NotificationsPage from "./pages/NotificationsPage/notificationspage";
import RegisterPage from "./pages/RegistationPage/registationpage";
import EditPerfilPage from "./pages/EditPerf/editperfpage";
import PageProvasNaoRealizadas from "./pages/PageProvasNaoRealizadas/Main";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/notificacoes/:numMecanografico" element={<NotificationsPage />} />
                <Route path="/homealuno/:numMecanografico" element={<HomeStudentPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/criarprova" element={isDocente() ? <CreateProvaPage /> : <Navigate to="/login" />} />
                <Route path="/editPerf" element={isAuthenticated() ? <EditPerfilPage /> : <Navigate to="/login" />} />
                <Route path="/provas/porRealizar" element={isAluno() ? <PageProvasNaoRealizadas numMecAluno={numMecanografico()} /> : <Navigate to="/login" />} />
                <Route path="/prova/:idProva/realizar" />
                {/* <Route path="/classificarprovas" element={} /> */}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
