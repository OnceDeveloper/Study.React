import React from 'react';
import AddNumberCon from '../../containers/addNumberCon';

const AddNumberRoot = (props) => {

    // const handleAdd = (number) => {
    //     props.onAdd(number);
    // }
    return (
        <div>
            <h1>Add Number Root</h1>
            {/* <AddNumber onAdd={handleAdd}/> */}
            <AddNumberCon />
        </div>
    )
};

export default AddNumberRoot;