import React from 'react';
import DatePicker from './datePickerMobile';
import './style.scss';
export default class datePickerTrigger extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        isDepartDate: true,
        departDateStr: localStorage.getItem('departDateStr') || '出发日期',
        returnDateStr: localStorage.getItem('returnDateStr') || '返回日期',
        departDateObj: new Date(JSON.parse(localStorage.getItem('departDateObj'))) || {},
        returnDateObj: new Date(JSON.parse(localStorage.getItem('returnDateObj'))) || {}
    }
    clickDepartDate = () => {
        this.setState({
            showDatePicker: true,
            isDepartDate: true
        });
    }
    clickReturnDate = () => {
        this.setState({
            showDatePicker: true,
            isDepartDate: false
        });
    }
    selectDate = (isDepartDate, month, day, departDateStr, date) => {
        if (isDepartDate) {
            this.setState({
                departDateStr: departDateStr,
                departDateObj: date
            });
            localStorage.setItem('departDateObj', JSON.stringify(date));
        } else {
            this.setState({
                departDateStr: departDateStr,
                returnDateObj: date
            });
            localStorage.setItem('returnDateObj', JSON.stringify(date));
        }
    }
    closeDatePicker = () => {
        this.setState({
            showDatePicker: false
        });
    }
    render() {
        return (
            <div className="datePicker-trigger">
                <span onClick={this.clickDepartDate} className = "depart-date">{this.state.departDateStr}</span>
                <span onClick={this.clickReturnDate}>{this.state.returnDateStr}</span>
                {this.state.showDatePicker &&
                // <div style={{ width: '33.3vw' }}>
                    <DatePicker closeDatePicker={this.closeDatePicker}
                        selectDate={this.selectDate}
                        isDepartDate={this.state.isDepartDate}
                        departDateStr={this.state.departDateStr}
                        returnDateStr={this.state.returnDateStr}
                    />
                // </div>
                }
            </div>
        );
    }
}
