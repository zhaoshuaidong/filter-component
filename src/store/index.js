import reducer from './reducer/index.js'

function createStore(reducer) {
    let state = {
        text: '',
        sex: 'a'
    };
    const getState = () => {
        return state;
    }
    const dispatch = (action) => {
        state = reducer(state, action);
    };
    return {
        getState,
        dispatch,
    }
}

const store = createStore(reducer);

export default store;