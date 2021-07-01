const redux = require('redux');
const reduxLogger = require('redux-logger');
const createSotre = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const combineReducers = redux.combineReducers;

// actions
//action-types
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER';
const SUBTRACTION = 'SUBTRACTION';
const ADD_VIEW_COUNT = 'ADD_VIEW_COUNT';
const addSubscriber = () => {
    return {
        type: ADD_SUBSCRIBER
    }
}
const subtraction = () => {
    return {
        type: SUBTRACTION
    }
}
const addViewCount = () => {
    return {
        type: ADD_VIEW_COUNT
    }
}
//reducers
const subscriberState = {
    subscribers: 365
}
const subscriberReducer = (state = subscriberState, action) => {
    switch (action.type) {
        case ADD_SUBSCRIBER:
            return {
                ...state, subscribers: state.subscribers + 1
            }
        case SUBTRACTION:
            const num = state.subscribers - 1;

            return {
                ...state, subscribers: num > 0 ? num : 0
            }
        default: return state;
    }
}

const viewState = {
    viewCount: 100
}
const viewReducer = (state = viewState, action) => {
    switch (action.type) {
        case ADD_VIEW_COUNT:
            return {
                ...state, viewCount: state.viewCount + 1
            }
        default: return state;
    }
}

const rootReducer = combineReducers({
    subscriber: subscriberReducer,
    view: viewReducer
})
//store
const store = createSotre(rootReducer, applyMiddleware(logger));
//subscribe - view - dispatch

// store.getStore => {subscribers : 365}

// store.subscribe(() => {
//     console.log('subscribe ==>> ', store.getState());
// });
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(subtraction());
store.dispatch(subtraction());
store.dispatch(addViewCount());
