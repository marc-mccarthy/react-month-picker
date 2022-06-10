import {useSelector} from 'react-redux';
import './Header.css';

function Header() {
    const thisMonthReducer = useSelector(store => store.thisMonthReducer);
    const changeMonthColor = useSelector(store => store.changeMonthColor);

    return (
        <div style={{backgroundColor: changeMonthColor}} className="Header">
            <header className="Header-header">
                <h1 className="Header-title">Select a Month</h1>
                <h3><b>{thisMonthReducer}</b></h3>
                <br/>
            </header>
        </div>
    );
}

export default Header;
