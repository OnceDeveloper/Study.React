import { createStore } from 'redux';

const stateInit = { number: 0 };

//reducer
export default createStore(function (state = stateInit, action) {//state가 undefined라면 stateInit으로 설정

    // if (state === undefined) {
    //     //return 0
    //     return { number: 0 }
    // }
    if (action.type === 'INCREMENT') {
        // return (state.number + action.size);
        return { number: state.number + action.size };
    }

    return state;

}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
