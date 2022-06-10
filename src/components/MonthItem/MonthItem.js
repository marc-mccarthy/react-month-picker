import {useDispatch} from 'react-redux';
import './MonthItem.css';

function MonthItem(props) {
    const dispatch = useDispatch();

    const changeMonth = () => {
        dispatch({type: 'CHANGE_MONTH', payload: props.month.name});
        dispatch({type: 'CHANGE_MONTH_COLOR', payload: composeColor()})
        console.log(composeColor())
        props.getMonths();
    }

    const composeColor = () => {
        let colorOne = Math.floor(Math.random() * 256);
        let colorTwo = Math.floor(Math.random() * 256);
        let colorThree = Math.floor(Math.random() * 256);
        return `rgb(${colorOne}, ${colorTwo}, ${colorThree})`
    }

    return (
        <div className="MonthItem">
            <li><button onClick={changeMonth}>{props.month.name}</button></li>
        </div>
    );
}


export default MonthItem;
