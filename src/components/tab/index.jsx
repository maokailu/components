import React from 'react';
import './style.scss';
import Flipsnap from '../../resources/flipsnap.js';
class Tab extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        current: 0
    };
    componentDidMount() {
        console.log('test');
        const distance = document.getElementById('flipsnap').offsetWidth / 3;
        this.flipsnap = new Flipsnap('#flipsnap', {
            distance: distance,
            maxPoint: 2
        });
        this.flipsnap.element.addEventListener('fstouchmove', ev => {
            if ((!this.flipsnap.hasNext() && ev.direction === 1) || (!this.flipsnap.hasPrev() && ev.direction === -1)) {
                ev.preventDefault();
            }
        });
        this.flipsnap.element.addEventListener('fstouchend', ev => {
            this.setState({ current: ev.newPoint });
        });
    }
    toggle = index => {
        this.setState({ current: index });
        this.flipsnap.moveToPoint(index);
    };
    render() {
        return (
            <div className="tab">
                <div className="nav">
                    {React.Children.map(this.props.children, (element, index) => {
                        return (
                            <span
                                key={index}
                                onClick={() => this.toggle(index)}
                                className={this.state.current === index ? 'active' : ''}
                            >
                                {element.props.name}
                            </span>
                        );
                    })}
                </div>
                <div className="content">
                    <div id="flipsnap">
                        {React.Children.map(this.props.children, (element, index) => {
                            return <div key={index} className="page">{element}</div>;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

const TabWrapper = props => {
    return (
        <Tab>
            {
                props.items && props.items.length > 0
                    && props.items.map((item, index)=>{
                        return (
                            <div key = {index} name={ item.title }>
                                { item.content }
                            </div>
                        );
                    })
            }
        </Tab>
    );
};

TabWrapper.defaultProps = {
    items: [
        { title: '一', content: '第一部分' },
        { title: '二', content: '第二部分' },
        { title: '三', content: '第三部分' }
    ]
}
;
export {
    Tab, TabWrapper
}
;
