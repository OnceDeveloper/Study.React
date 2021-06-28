import AddNumber from '../components/add/addNumber';
import { connect } from 'react-redux';


function mapDispatchToProps(dispatch) {

    return {
        onClick: (size) => {
            dispatch({ type: 'INCREMENT', size: size });

        }

    };

}
export default connect(null, mapDispatchToProps)(AddNumber);
/*
import React from 'react';
import store from '../store/store';

//하나의 컴포넌트만 감싸지 않아도 됨
const AddNumberCon = () => {
    return (<AddNumber onClick={(size) => {
        store.dispatch({ type: 'INCREMENT', size: size })
    }} />)
}
export default AddNumberCon;
*/