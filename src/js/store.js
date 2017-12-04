import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import description from './reducers/description';
import titleAuthor from './reducers/titleAuthor';

// create an object for the default data
const defaultState = {
description,
titleAuthor,
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;