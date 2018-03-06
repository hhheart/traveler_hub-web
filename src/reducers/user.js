import {  
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILURE,
    //NORMAL LOGIN
    LOGIN_SUCCESS, 
    LOGIN_FAILURE,
    LOGOUT,
    //FACEBOOK LOGIN
    LOGIN_FACEBOOK_SUCCESS,
    LOGIN_FACEBOOK_FAILURE,
    POST_FB_DATA_SUCCESS,
    POST_FB_DATA_FAILURE,
    DELETE_FB_PERMISSION_SUCCESS,
    DELETE_FB_PERMISSION_FAILURE,
} from '../constants/actions_types';

const initialState = {
    role: 'guest',
    isLoggedIn: false,
    fbLoggedIn: false,
    email: '',
    profile_image: '',
    errorMsg: '',
}
const user = (state = initialState, action) => {
    switch(action.type) {
        case AUTHENTICATION_SUCCESS:
            console.log('authentication success')
            if (localStorage.getItem('fb_userID')){  
                return ({
                    fbLoggedIn: true,
                    isLoggedIn: true,
                    email: action.payload.email,
                    role: action.payload.usertype,              
                })
            }
            else {
                return ({
                    fbLoggedIn: false,
                    isLoggedIn: true,
                    email: action.payload.email,
                    role: action.payload.usertype,              
                })
            }
        case AUTHENTICATION_FAILURE:
            console.log('authentication failure')
            return ({
                ...state
            })   
        case LOGIN_SUCCESS:
            console.log('login success')
            localStorage.setItem('login_token', action.payload.token)
            return ({
                isLoggedIn: true,
                email: action.payload.user.email,
                role: action.payload.user.usertype,
                errorMsg: '',
            })
        case LOGIN_FAILURE:
            console.log('login failure')
            return ({
                ...state
            })
        case LOGIN_FACEBOOK_SUCCESS:
            console.log('facebook success')
            localStorage.setItem('login_token', 'dummy_token')
            return ({
                isLoggedIn: true,
                fbLoggedIn: true,
                email: action.payload.email,
                profile_image: action.payload.picture.data.url,
                role: 'c',
            })
        case LOGIN_FACEBOOK_FAILURE:
            console.log('facebook failure')
            return ({
                role: 'guest',
                email: '',
                errorMsg: 'error',
            })
        case POST_FB_DATA_SUCCESS:
            console.log('post fb data to server success')
            return({
                ...state,
                email: action.payload.user.email,                
            })
        case POST_FB_DATA_FAILURE:
            console.log('post fb data to server failure')
            return({
                ...state
            })
        case DELETE_FB_PERMISSION_SUCCESS:
            console.log('delete fb apps permission success')
            localStorage.removeItem('login_token')
            localStorage.removeItem('fb_userID')
            localStorage.removeItem('fb_accessToken')
            window.location.reload()
            return ({
                role: 'guest',
                email: '',
                fbLoggedIn: false,
                isLoggedIn: false,
            })
        case DELETE_FB_PERMISSION_FAILURE:
            console.log('delete app permission failure')
            return ({
                role: 'c',
                email: '',
                errorMsg: 'error',
            })     
        case LOGOUT: 
            console.log('loging out')
            localStorage.removeItem('login_token')
            return ({
                role: 'guest',
                email: '',
                isLoggedIn: false,
            })
        default:
            return state
    }
}
      
export default user