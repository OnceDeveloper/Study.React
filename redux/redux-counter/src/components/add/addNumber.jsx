import React, { useRef, useState } from 'react';
import store from '../../store/store';

//presentation component
const AddNumber = (props) => {

    const [size, setSize] = useState(0);

    const handleAdd = () => {
        //props.onAdd(size);
        //store.dispatch({ type: 'INCREMENT', size: size });
        props.onClick(size);
    }

    const onChange = (e) => {
        setSize(Number(e.target.value));
    }

    return (
        <div>
            <h1>Add Number</h1>
            <input style={{ cursor: 'pointer' }} text="button" value="+" onClick={handleAdd} />
            <input type="text" onChange={onChange} value={size} />
        </div>
    )
};

export default AddNumber;