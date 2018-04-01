import React from 'react';
import './style.scss';
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    current: 0
  };
  componentDidMount() {
    setInterval(() => {
      console.log('d');
    }, 1000);
  }
  render() {
    return (
      <div className="carousel">
        <div className="nav">
          {
            React.Children.map(this.props.children, (element, index) => {
              return (
                <span key={index} className={ this.state.current === index ? 'active' : '' }>{ element.props.name }</span>
              );
            })
          }
        </div>
        <div className="content">
          {
            React.Children.map(this.props.children, (element, index) => {
              return (
                <div key={index}>{ element }</div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
