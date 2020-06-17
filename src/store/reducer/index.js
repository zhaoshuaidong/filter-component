import {filterAction} from '../action/index.js';

const initialState = {
    text: '',
    sex: 'a'
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case filterAction.filterCondition:
        return { ...state, ...payload }
    default:
        return state
    }
}
