
import { RSAA } from 'redux-api-middleware';
import { 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE,
    LOGIN_FACEBOOK_REQUEST,
    LOGIN_FACEBOOK_SUCCESS,
    LOGIN_FACEBOOK_FAILURE,
    AUTHENTICATION_REQUEST,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILURE,
    LOGOUT,
} from '../constants/actions_types';

import { 
    SERVER_LOGIN, 
    SERVER_FACEBOOK_LOGIN, 
    TOKEN_CHECK 
} from '../constants/endpoints';

export const check_token = () =>({
    [RSAA]: {
        endpoint: TOKEN_CHECK,
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '+localStorage.getItem("login_token")},
        types: [    
            AUTHENTICATION_REQUEST,
            AUTHENTICATION_SUCCESS,
            AUTHENTICATION_FAILURE,]
    }
})
export const onLogin = (values) =>({
    [RSAA]: {
        endpoint: SERVER_LOGIN,
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values),
        types: [
            LOGIN_REQUEST,
            LOGIN_SUCCESS,
            LOGIN_FAILURE
        ]
    }
})

export const onLogin_facebook = () =>({
    [RSAA]: {
        endpoint: SERVER_FACEBOOK_LOGIN,
        method: 'GET',
        types: [
            LOGIN_FACEBOOK_REQUEST,
            LOGIN_FACEBOOK_SUCCESS,
            LOGIN_FACEBOOK_FAILURE
        ]
    }
})

export function onLogout() {
    return {
        type: LOGOUT,
    }
}