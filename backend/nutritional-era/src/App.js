import React, { Fragment } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom';
import Navbar from "./component/layout/Navbar";
import MainPage from "./component/layout/MainPage";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
//Redux
import { Provider } from "react-redux";
import store from "./store";
const App = () => (
    <Provider store={store}>
        <Router>
            <Navbar/>  
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    </Provider>
)

export default App;
