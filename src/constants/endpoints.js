//client
export const URL_ROOT = '/';

//server
export const REQUEST_ROOT = 'https://api.travelerhub.xyz'; 
export const SERVER_LOGIN = 'https://api.travelerhub.xyz/login';
export const FACEBOOK_GRAPH_API = 'https://graph.facebook.com/[id]?fields=email,id,first_name,last_name,gender,picture.type(large)&access_token=[key]';

export const TOKEN_CHECK = 'https://api.travelerhub.xyz/auth';
export const POST_FACEBOOK_DATA = 'https://api.travelerhub.xyz/auth/facebook';

//search
export const SEARCH_PACKAGE_ROOT = 'https://api.travelerhub.xyz/package/search?';
export const SEARCH_DICTIONARY = 'https://api.travelerhub.xyz/dictionary';

export const GET_PACKAGE_TEMPLATE = 'https://api.travelerhub.xyz/package/'

//user
export const USER_ENDPOINT = 'https://api.travelerhub.xyz/user';
export const FEEDBACK_ENDPOINT = 'https://api.travelerhub.xyz/favorite';
export const USER_HISTORY = 'https://api.travelerhub.xyz/bookmark';

//agency
export const AGENCY_LINECHART_TEMPLATE = 'https://api.travelerhub.xyz/report/history?';
export const AGENCY_BARCHART_TEMPLATE = 'https://api.travelerhub.xyz/report/favorite?';
export const AGENCY_USERCHART_TEMPLATE = 'https://api.travelerhub.xyz/report/views?';