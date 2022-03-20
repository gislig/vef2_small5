import React from 'react';
import propTypes from 'prop-types';
import styles from './datetable.css';

const DateTable = ({daysInMonth, firstWeekdayOfMonth, onDayPick}) => {

    let rows = []
    rows = populateWeekdaysTableIdx(rows);
    rows = populateDaysInMonthEntries(rows, daysInMonth, firstWeekdayOfMonth, onDayPick);

    return (
        <table className={`${styles.table}`}>
            <tbody>
            {rows}
            </tbody>
        </table>
    );
}

const populateWeekdaysTableIdx = (rows) => {
    let weekdays = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];
    for (let i = 0; i < weekdays.length; i++) {
        weekdays[i] = <td className={`${styles.index}`} key={weekdays[i]} id={weekdays[i]}>{weekdays[i]}</td>
    }
    rows.push(<tr key={rows.length} id={rows.length}>{weekdays}</tr>)
    let ret = rows;

    return ret;
}

const populateDaysInMonthEntries = (rows, daysInMonth, firstWeekdayOfMonth, onDayPick) => {

    const maxMonthSize = 31;
    const numberOfWeekdays = 7;
    const size = maxMonthSize + numberOfWeekdays + 7;
    let monthDays = [];
    let daysIdx = 1;

    for (let i = 0; i < size; i++) {
        if (monthDays.length === numberOfWeekdays) {
            rows.push(<tr key={rows.length} id={rows.length}>{monthDays}</tr>)
            monthDays = [];
        }

        if (i < firstWeekdayOfMonth || i >= firstWeekdayOfMonth + daysInMonth) {
            monthDays.push(<td key={monthDays.length * rows.length} id={monthDays.length * rows.length}>&nbsp;</td>);
        } else {
            monthDays.push(<td onClick={(e) => onDayPick(e)} className={`${styles.entry}`}
                               key={monthDays.length * rows.length}
                               id={monthDays.length * rows.length}>{String(daysIdx)}</td>);
            daysIdx++;
        }

    }

    return rows;
}

DateTable.propTypes = {
    daysInMonth: propTypes.number.isRequired,
    firstWeekdayOfMonth: propTypes.number.isRequired,
    onDayPick: propTypes.func.isRequired
}


export default DateTable;