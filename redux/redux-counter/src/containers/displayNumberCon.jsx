import React, { useState } from 'react';
import DisplayNumber from '../components/display/displayNumber';
import { connect } from 'react-redux';


//redux의 state를 react의 props로 매핑해준다
//1. return값으로 객체를 반환해야 하며, 이 객체의 property는 wrapped 되어있는(데이터를 전달하고자 하는) component의 props의 이름과 같아야 한다.
//2. Redux - Store의 값이 변경 될 때마다 호출된다.
//3. 호출될 때 Redux - Store의 state가 파라미터로 주입된다.
// 인자인 state는 redux의 state다 (store에 있는 state!!) => store.getState()
function mapReduxStateToReactProps(state) {//인자로 state를 받아야한다. state가 변경될때마다 렌더링되기로 약속되어있다.

    return {//전달하고자하는 프로퍼티 이름은 같아야함
        number: state.number
    }
}

//connect를 실행하면 return 값이 함수 -> 그 return된 함수를 다시 실행하는 함수다.(래핑된 컴포넌트가 return 될 것!)
export default connect(mapReduxStateToReactProps)
    (DisplayNumber);


/*
import store from '../store/store';

//Container를 도입하면서 코드가 많아짐 !! => react-redux 활용!
const DisplayNumberCon = () => {
    const [number, setNumber] = useState(store.getState().number);

    // store.subscribe(function () {
    //     setNumber(store.getState().number);
    // })
    store.subscribe(() => {
        setNumber(store.getState().number);
    })

    return <DisplayNumber number={number} unit={this.props.unit} />
}

export default DisplayNumberCon;
*/