import { combineReducers } from 'redux';

import user from './user'
import agency from './agency'
import package_search from './package_search'

//import reducer_test from './test';



const rootReducer = combineReducers({
  //Test: reducer_test,
  user,
  agency,
  package_search,
  
});

export default rootReducer;
