import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import request from '../../../utils/request';
let width;
let position;
let container;
let defaultContent = 'This is text';
let defaultDuration = 2000;
let types = ['info', 'loading', 'success', 'error', 'warning'];
let Toast = {
    show(content, duration, type) {
        if (!this.closeTimer) {
            this.createDiv(content, type);
            console.log("first")
        } else {
            clearTimeout(this.closeTimer);
            this.setContent(content, type);
            console.log("notfirst")
        }
        this.remove(duration);
    },
    remove(duration) {
        this.closeTimer = setTimeout(() => {
            this.close();
        }, duration || defaultDuration);
    },
    createDiv(content, type) {
        this.getContainer();
        this.setContent(content, type);
    },
    getContainer() {
        container = container || document.createElement('div');
        document.body.appendChild(container);
    },
    close() {
        if (!this.closeTimer) {
            Toast.show('请先开启Toast');
            return;
        }
        clearTimeout(this.closeTimer);
        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
        this.closeTimer = null;
    },
    setContent(content, type) {
        let iconType = types[type];
        ReactDOM.render(
            <div
                className="toast"
                style={{
                    width: width,
                    top: position && position.top,
                    right: position && position.right,
                    bottom: position && position.bottom,
                    left: position && position.left
                }}
            >
                <span className={iconType !== 'info' ? 'content' : null}>{content || defaultContent}</span>
            </div>,
            container
        );
    },
    getUserName(userID) {
        return request('/users/' + userID).then(user => user.name);
    }
};
export default {
    info(content, duration) {
        Toast.show(content, duration, 0);
    },
    loading(content, duration) {
        Toast.show(content, duration, 1);
    },
    success(content, duration) {
        Toast.show(content, duration, 2);
    },
    error(content, duration) {
        Toast.show(content, duration, 3);
    },
    warning(content, duration) {
        Toast.show(content, duration, 4);
    },
    close() {
        Toast.close();
    },
    config(options) {
        if (!options.width) {
            width = options.width;
        }
        if (!options.duration) {
            defaultDuration = options.duration;
        }
        if (!options.getContainer) {
            container = options.getContainer;
        }
        if (!options.position) {
            position = options.position;
        }
    },
    getUserName(userID) {
        return Toast.getUserName(userID);
    }
};
