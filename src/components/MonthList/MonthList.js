import './MonthList.css';
import MonthItem from '../MonthItem/MonthItem';

function MonthList(props) {

    return (
        <div className="MonthList">
            <ul>
                {props.months.map(thisMonth =>(<MonthItem month={thisMonth} getMonths={props.getMonths}/>))}
            </ul>
        </div>
    );
}

export default MonthList;
