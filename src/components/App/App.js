import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import MonthList from '../MonthList/MonthList';

function App() {
    const [months, setMonths] = useState([]);
    
    useEffect(() => {
        getMonths();
    }, []);

    const getMonths = () => {
        axios.get('/calendar').then(response => {
            console.log(`GET Response: ${JSON.stringify(response.data)}`);
            setMonths(response.data);
        }).catch(error => {
            console.log(`GET Error: ${error}`);
        })
    }

    return (
        <div className="App">
        <Header/>
            <MonthList months={months} getMonths={getMonths}/>
        </div>
    );
}

export default App;
