import { RSAA } from 'redux-api-middleware';
import { 
    //NORMAL LOGIN
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE,
    AUTHENTICATION_REQUEST,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILURE,
    LOGOUT,
    //FACEBOOK LOGIN
    LOGIN_FACEBOOK_REQUEST,
    LOGIN_FACEBOOK_SUCCESS,
    LOGIN_FACEBOOK_FAILURE,
    POST_FB_DATA_REQUEST,
    POST_FB_DATA_SUCCESS,
    POST_FB_DATA_FAILURE,
    DELETE_FB_PERMISSION_REQUEST,
    DELETE_FB_PERMISSION_SUCCESS,
    DELETE_FB_PERMISSION_FAILURE,
} from '../constants/actions_types';

import { 
    SERVER_LOGIN, 
    POST_FACEBOOK_DATA,
    TOKEN_CHECK,
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
            AUTHENTICATION_FAILURE,
        ]
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
export const onLogin_facebook = (request) =>({
    [RSAA]: {
        endpoint: request,
        method: 'GET',
        types: [
            LOGIN_FACEBOOK_REQUEST,
            LOGIN_FACEBOOK_SUCCESS,
            LOGIN_FACEBOOK_FAILURE
        ]
    }
})
export const postFB_dataToServer = (values) =>({
    [RSAA]: {
        endpoint: POST_FACEBOOK_DATA,
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values),
        types: [
            POST_FB_DATA_REQUEST,
            POST_FB_DATA_SUCCESS,
            POST_FB_DATA_FAILURE,
        ]
    }
})
export function onLogout() {
    return {
        type: LOGOUT,
    }
}
export const delete_fb_app_permission = () =>({
    [RSAA]: {
        endpoint: 'https://graph.facebook.com/'+
            localStorage.getItem("fb_userID")+'/permissions/'+'?access_token='+
            localStorage.getItem("fb_accessToken"),
        method: 'DELETE',
        types: [    
            DELETE_FB_PERMISSION_REQUEST,
            DELETE_FB_PERMISSION_SUCCESS,
            DELETE_FB_PERMISSION_FAILURE,
        ]
    }
})
