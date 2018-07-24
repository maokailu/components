import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Toast from '../src/components/toast/toast-base';

class Test extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="btn" onClick={()=>Toast.info()}>btn</div>
        );
    }
}
describe('A suite', () => {
    // test
    const MockFn = jest.fn();
    jest.useFakeTimers();
    const wrapper = shallow(<Test />);
    it('Test Component should be render', function() {
        expect(wrapper.find('.btn').length).toBe(1);
    });
    it('Should render Toast with correct DOM structure', () => {
        expect(renderToJson(wrapper)).toMatchSnapshot();
    });
    it('Simulates click events', function() {
        wrapper.find('.btn').at(0).simulate('click');
    // expect(wrapper.find('.toast').length).toBe(1);?
        // expect(MockFn).toHaveBeenCalled();
    });
    it('CloseTimer works', function() {
        jest.runAllTimers();
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
        expect(wrapper.find('.toast').length).toBe(0);
    });
    // 断言必须返回一个primose
    it('works with resolves', () => {
        expect.assertions(1);
        // return Toast.getUserName(4).then(data => expect(data).toEqual('Mark'));
        return expect(Toast.getUserName(5)).resolves.toEqual('Paul');
    });
    // 使用async/await
    it('works with async/await', async () => {
        expect.assertions(1);
        const data = await Toast.getUserName(4);
        expect(data).toEqual('Mark');
    });
    // async/await 也可以和 `.resolves` 一起使用.
    it('works with async/await and resolves', async () => {
        expect.assertions(1);
        await expect(Toast.getUserName(5)).resolves.toEqual('Paul');
    });
});