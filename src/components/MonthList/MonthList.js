import { useState, useEffect } from 'react';
import axios from 'axios';
import './MonthList.css';
import App from '../App/App';
import MonthItem from '../MonthItem/MonthItem';

function MonthList(props) {

    return (
        <div className="MonthList">
            <ul>
                {props.months.map(thisMonth =>(<MonthItem month={ thisMonth } getItems={ props.getMonths }/>))}
            </ul>
        </div>
    );
}


export default MonthList;
