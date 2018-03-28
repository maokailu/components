import React from 'react';
import './style.scss';

export default function Arrow(props) {
  // const propTypes: {
  //     arrow_direction_type: PropTypes.string.isRequired
  // };

  // const defaultProps = {
  //     arrow_direction_type: 'arrow_up'
  // };
  return <i className={props.arrow_direction_type}></i>;
}
