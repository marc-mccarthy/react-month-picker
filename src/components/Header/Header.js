import { useState, useEffect } from 'react';
import axios from 'axios';
import './Header.css';

function Header() {
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
        <div className="Header">
            <header className="App-header">
                <h1 className="App-title">Select a Month</h1>
                <h3>SELECTED MONTH GOES HERE</h3>
                <br/>
            </header>
        </div>
    );
}

export default Header;
