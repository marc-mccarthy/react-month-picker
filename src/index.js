import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const thisMonthReducer = (state = 'Which Month?', action) => {
    if (action.type === 'CHANGE_MONTH') {
        state = action.payload;
    }
    return state;
}

const changeMonthColor = (state = 'rgb(150, 150, 150)', action) => {
    if (action.type === 'CHANGE_MONTH_COLOR') {
        state = action.payload;
    }
    return state;
}

const store = createStore(
    combineReducers({
        thisMonthReducer,
        changeMonthColor,
    })
)

ReactDOM.render(<Provider store = {store}><App/></Provider>, document.getElementById('root'));
