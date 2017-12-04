import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


import description from './description';
import titleAuthor from './titleAuthor';

const rootReducer = combineReducers({description, titleAuthor, routing: routerReducer });

export default rootReducer;