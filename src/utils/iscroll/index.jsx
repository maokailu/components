import React from 'react';
import './style.scss';
import IScroll from '../../resources/iscroll'

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
  };
  componentDidMount() {
    var myScroll = new IScroll('#wrapper', {
        mouseWheel: true,
        scrollbars: true
    });
  }
  render() {
    return (
        <div id="wrapper">
            <ul>
                <li>...</li>
                <li>...</li>
                ...
            </ul>
            <ul>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                ...
            </ul>
            <ul>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                <li>..qqqq.</li>
                ...
            </ul>
        </div>
    );
  }
}
