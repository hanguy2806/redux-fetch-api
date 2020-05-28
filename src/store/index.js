import {createStore,combineReducers, compose, applyMiddleware} from 'redux';
import movielistReducer from './reducers/movieReducer'
import userReducer from './reducers/userReducer'
import thunk from 'redux-thunk'

const middleware=[thunk]
const allReducer=combineReducers({
    movies: movielistReducer,
    users: userReducer
})
const initialState={      
     movies: {name: 'TITANIC'},
     users: [],
};
const store=createStore(
    allReducer,initialState,
    compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;