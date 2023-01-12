import React, {useEffect} from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./component/layout/Navbar";
import MainPage from "./component/layout/MainPage";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import ProfileForm from "./component/profile-form/CreateProfile"
import AddEducation from "./component/profile-form/AddEducation";
import AddExperience from "./component/profile-form/AddExperience";
import Alert from "./component/layout/Alert";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import Dashboard from "./component/dashboard/Dashboard";
import PrivateRoute from "./component/routing/PrivateRoute";

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
                <Route
            path="dashboard"
            element={<PrivateRoute component={Dashboard} />}
            />
                 <Route path="create-profile"element={<PrivateRoute component={ProfileForm} />}/>
                 <Route
            path="edit-profile"
            element={<PrivateRoute component={ProfileForm} />}
            />
          <Route
            path="add-experience"
            element={<PrivateRoute component={AddExperience} />}
             />
          <Route
            path="add-education"
            element={<PrivateRoute component={AddEducation} />}
            />
            </Routes>
        </Router>
    </Provider>
)};

export default App;
