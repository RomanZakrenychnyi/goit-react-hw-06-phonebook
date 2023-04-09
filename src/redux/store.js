import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contact/ContactReducer';
import filterReducer from './filter/filterReducer';


const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});


export const store = createStore(rootReducer, composeWithDevTools());
