import React from 'react';
//import DisplayNumber from './displayNumber';
import DisplayNumberCon from '../../containers/displayNumberCon';

const DisplayNumberRoot = (props) => (
    <div>
        <h1>Display Number Root</h1>
        {/* <DisplayNumber number={props.number} /> */}
        <DisplayNumberCon unit={"kg"} />
    </div>
);

export default DisplayNumberRoot;