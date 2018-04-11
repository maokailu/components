import React from 'react';
import './list.scss';
import classNames from 'classnames';
export default class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      showHeaderMenu: false
    };
  }
  componentDidMount() {
  }
  render() {
    classNames({
    });
    return (
      <div>
        <div className="info">
          <i className=""/>
            Great Choice!
        </div>
        <div className="box">
          <div style={{ color: '#666' }}>Fri, Apr 20</div>
          <div className="flight-list">
            <div className="time">
                <span>13:20</span>
                <span>13:20</span>
            </div>
            <div className="city">
                <span>HKG</span>
                <span>HKG</span>
            </div>
          </div>
        </div>
        <div className="box">
            <div className="row1">
                <span className="policy">Good to Know</span>
                <span className="details">Details</span>
            </div>
            <div className="row2">
                <i className="icon" />Recommended flight
            </div>
            <ul className="row3">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
        <div className="box">
            there is the flight info
        </div>
        <div className="box">
            there is the flight info
        </div>
      </div>
    );
  }
}
