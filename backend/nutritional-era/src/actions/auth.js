import axios from 'axios';
import api from '../utils/api';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAILURE, USER_LOADED, AUTH_ERROR} from './types';
// import { SET_ALERT } from './types';
import setAuthToken from '../utils/setAuthToken';
//!!!!!!!!!!!!!!!!...............Load User...................!!!!!!!!!!!!!!!

export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get('/api/auth');
        dispatch({
            type: USER_LOADED,
            payload:res.data
        });
    } catch (error) {
        dispatch({
            type:AUTH_ERROR
        });
    }
}

//!!!!!!!!!!!!!!!!...............Register User...................!!!!!!!!!!!!!!!
export const register = ({uname,email,password}) => async dispatch => {
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify({uname,email,password});
    try {
        const res = await axios.post('/api/users',body,config);
        dispatch({type:REGISTER_SUCCESS,
        payload:res.data});
    } catch (error) {
        const errors=error.response.data.errors;
        if (errors){
            errors.forEach(error => dispatch(setAlert(error.msg,'danger')));
        }
        dispatch({
            type:REGISTER_FAILURE
        });
    }
}