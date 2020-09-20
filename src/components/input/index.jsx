import React, { useState } from 'react';
const Input = props => {
    const [value, setValue] = useState('');
    return (
        <input ref={props.input} value={value} onInput={e => setValue(e.target.value)} />
    );
};
export default React.memo(Input);
