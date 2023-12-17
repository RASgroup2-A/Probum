import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Cookies from 'js-cookie';

import LoginPage from "./pages/LoginPage/Main";
import CreateProvaPage from "./pages/CreateProvaPage/Main";

const isAuthenticated = (type = 'docente') => {
    const cookieToken = Cookies.get('token') || '{"type": "none"}';
    const token = JSON.parse(cookieToken)
    return token.type === type;
};


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/criarprova"  element={isAuthenticated() ? <CreateProvaPage /> : <Navigate to="/login" />}/>
                {/* <Route path="/classificarprovas" element={} /> */}
                <Route path="*" element={<Navigate to="/login" />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
