import React from 'react';
import './loading-self.scss';
function Pip(props) {
    return <div className = {'pip' + props.num}></div>;
}
export const Loading = ()=> {
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    return (
        <div className = "container">
            {
                nums.map(num =>
                    <Pip key = {num} num = {num} />
                )
            }
        </div>
    );
};