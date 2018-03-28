import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      text: this.props.text,
      time: this.props.time
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow(e) {
    e.stopPropagation();
    if (!this.closeTimer) {
      this.setState({ showModal: true });
    } else {
      clearTimeout(this.closeTimer);
    }
    this.closeTimer = setTimeout(() => {
      this.handleHide();
    }, this.state.time);
  }

  handleHide() {
    if (!this.closeTimer) {
      // 使用者未开启Toast而直接调用该方法时的提示
      this.setState({
        text: '请先开启Toast'
      });
      return;
    }
    this.setState({ showModal: false });
    this.closeTimer = null;
  }

  render() {
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <div>this is the toast text</div>
        </div>
      </Modal>
    ) : null;

    return (
      // click the page to hide the toast
      <div className="app" style={{ width: '370px', background: 'yellow' }}>
        <span style={{ fontSize: '24px', lineHeight: '30px', background: 'white' }}>
        Click the button to show the toasts</span><br/>
        <span style={{ fontSize: '100px', lineHeight: '48px' }}>20:30</span><br/>
        <span style={{ fontSize: '24px', lineHeight: '30px' }}>PVG</span>
        {/* <button onClick={this.handleShow}>{this.state.text}</button> */}
        {modal}
      </div>
    );
  }
}

export { App, appRoot };
