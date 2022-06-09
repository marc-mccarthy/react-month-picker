import { useState, useEffect } from 'react';
import axios from 'axios';
import './MonthItem.css';

function MonthItem(props) {

    const alertMonth = () => {
        alert(`The month you clicked is ${props.month.name}`);
    }

    return (
        <div className="MonthItem">
            <li><button onClick={alertMonth}>{props.month.name}</button></li>
        </div>
    );
}


export default MonthItem;
