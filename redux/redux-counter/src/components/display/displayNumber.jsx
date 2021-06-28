import React, { useState } from 'react';
import store from '../../store/store';

const DisplayNumber = (props) => {
    //const [number, setNumber] = useState(store.getState().number);


    // store.subscribe(function () {
    //     setNumber(store.getState().number);
    // })

    return (
        <div>
            <h1>Display Number</h1>
            {/* <input type="text" value={number} readOnly /> */}
            <input type="text" value={props.number} readOnly />
            <span>{props.unit}</span>
        </div>
    )
};

export default DisplayNumber;