import React from 'react';
import './search.scss';
import classNames from 'classnames';
export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      showHeaderMenu: false
    };
  }
  componentDidMount() {
  }
  render() {
    const arrow = classNames({
      'arrow': true,
      'icon-arrow-up': this.state.showHeaderMenu,
      'icon-arrow-down': !this.state.showHeaderMenu
    });
    return (
      <div>
        <div className="head">
          <i className="logo"></i>
          <i className={arrow} onClick={() => this.setState(prevState => ({ showHeaderMenu: !prevState.showHeaderMenu }))}></i>
        </div>
        <div className="category">
          <span>Hotels</span>
          <span>Flights</span>
          <span>Trains</span>
        </div>
        <div className="search-box">
          <div className="tab">
            <div className="round_trip">Round Trip</div>
            <div className="one_way">One-Way</div>
          </div>
          <div className="box">
            <span className="tit">From</span>
            <div className="content">Shanghai</div>
            <span className="code">All Airports</span>
          </div>
          <div className="box">
            <span className="tit">From</span>
            <div className="content">Shanghai</div>
            <span className="code">All Airports</span>
          </div>

          <div className="box hascolumn">
            <div>
              <div className="tit">Depart</div>
              <span className="content">Apr 11</span>
              <span className = "week">Today</span>
            </div>
            <div>
              <div className="tit">Depart</div>
              <span className="content">Apr 11</span>
              <span className = "week">Today</span>
            </div>
          </div>

          <div className="box hascolumn clearline">
            <div className="class">
              <div className="tit">Class</div>
              <span className="content">Economy</span>
            </div>
            <div className="passenger">
              <div className="tit">Passenger</div>
              <span className="content">1</span>
            </div>
          </div>
          <div className="search-btn">Search</div>
        </div>
        <div className="footer-menu">
          <div className="left">
            <i className="icon-status"/>
            <span>Flight Status</span>
          </div>
          <div className="right">
            <i className="icon-bookings"/>
            <span>My Bookings</span>
          </div>
        </div>
      </div>
    );
  }
}
