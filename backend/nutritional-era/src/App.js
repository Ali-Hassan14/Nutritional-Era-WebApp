import React, {useEffect} from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./component/layout/Navbar";
import MainPage from "./component/layout/MainPage";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import Alert from "./component/layout/Alert";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

const App = () => {
    useEffect(()=>{
        store.dispatch(loadUser)
    },[]);
    return(
    <Provider store={store}>
        <Router>
            <Navbar/>  
            <Alert/>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    </Provider>
)};

export default App;
