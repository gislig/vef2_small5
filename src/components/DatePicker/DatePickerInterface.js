import React from 'react';
import propTypes from 'prop-types';
import styles from './datepickerinterface.css';
import FontAwesome from "react-fontawesome";
import DateTable from './DateTable';

class DatePickerInterface extends React.Component {

    constructor(props, ctx) {
        super(props, ctx);
        this.state = {
            showPicker: false,
            date: new Date()
        };
    }

    componentDidMount() {
        this.updateDateStrings();
    }

    updateDateStrings() {
        this.setState({
            currMonth: String((this.state.date).getMonth() + 1),
            currYear: String(this.state.date.getFullYear())
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.date !== this.state.date) {
            this.updateDateStrings();
            this.props.onClose();
            this.props.onDatePick(this.state.date.toLocaleDateString(this.props.locale));
        }
    }

    render() {

        const {currYear} = this.state;
        const {currMonth} = this.state;

        if (this.props.visible) {
            const firstDayInMonthWeekday = parseInt((new Date(parseInt(currYear, 10), parseInt(currMonth, 10) - 1, parseInt(1, 10))).getDay(), 10);
            return (
                <div className={`${styles.wrapper}`}>
                    <div className={`${styles.feedback}`}>
                        <div className={`${styles.monthWrapper}`}>
                            <span className={`${styles.decrement}`}>
                                <FontAwesome
                                    onClick={() => this.decrementMonth()}
                                    aria-hidden='false'
                                    name='angle-left'
                                />
                            </span>
                            <span className={`${styles.month}`}>
                                {months[parseInt(this.state.currMonth, 10) - 1]}
                                &nbsp;
                                {this.state.currYear}
                            </span>
                            <span className={`${styles.increment}`}>
                                <FontAwesome
                                    onClick={() => this.incrementMonth()}
                                    aria-hidden='false'
                                    name='angle-right'
                                />
                            </span>
                        </div>
                    </div>
                    <DateTable
                        daysInMonth={this.getMonthDays(this.state.currMonth, this.state.currYear)}
                        firstWeekdayOfMonth={firstDayInMonthWeekday}
                        onDayPick={(e) => this.setState({date: new Date(parseInt(currYear, 10), parseInt(currMonth, 10) - 1, parseInt(e.target.innerHTML, 10))})}
                    />
                </div>
            );
        } else return <div/>;
    }

    incrementMonth() {
        if (parseInt(this.state.currMonth, 10) === 12) {
            this.setState({
                currMonth: '1',
                currYear: String(parseInt(this.state.currYear, 10) + 1)
            });
        } else {
            this.setState({
                currMonth: String(parseInt(this.state.currMonth, 10) + 1)
            });
        }
    }

    getMonthDays(month, year) {
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month === '2') {
            if (year % 4 === 0) {
                return 29;
            } else {
                return 28;
            }
        } else {
            return daysInMonth[parseInt(month, 10) - 1];
        }
    }


    isLeapYear(year) {
        if (year % 4 === 0) {
            return true;
        } else {
            return false;
        }
    }

    decrementMonth() {
        if (parseInt(this.state.currMonth, 10) === 1) {
            this.setState({
                currMonth: '12',
                currYear: String(parseInt(this.state.currYear, 10) - 1)
            });
        } else {
            this.setState({
                currMonth: String(parseInt(this.state.currMonth, 10) - 1)
            });
        }
    }

}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// propTypes the interface needs to function
DatePickerInterface.propTypes = {
    onDatePick: propTypes.func.isRequired,
    onClose: propTypes.func.isRequired,
    visible: propTypes.bool.isRequired,
    locale: propTypes.string
};

DatePickerInterface.defaultProps = {
    locale: 'is-IS'
};

export default DatePickerInterface;