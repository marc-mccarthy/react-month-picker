import { useState, useEffect } from 'react';
import axios from 'axios';
import './MonthItem.css';

function MonthItem(props) {

    return (
        <div className="MonthItem">
            <li><button>{props.month.name}</button></li>
        </div>
    );
}


export default MonthItem;
