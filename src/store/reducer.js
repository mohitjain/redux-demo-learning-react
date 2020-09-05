import * as actionTypes from './action';

const initialState = {
    counter: 0,
    results: []
}
const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.INCREMENT){
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if(action.type === actionTypes.DECREMENT){
        return {
            ...state,
            counter: state.counter - 1
        }
    }

    if(action.type === actionTypes.ADD){
        return {
            ...state,
            counter: state.counter + action.val
        }
    }

    if(action.type === actionTypes.SUBTRACT){
        return {
            ...state,
            counter: state.counter - action.val
        }
    }

    if(action.type === actionTypes.STORE_RESULT){
        return {
            ...state,
           results: state.results.concat({id: new Date(), value: state.counter})
        }
    }

    if(action.type === actionTypes.DELETE_RESULT){
        const newArray = state.results.filter((result) => result.id !== action.resultElementId)

        return {
            ...state,
            results: newArray
        }
    }
    return state;
};

export default reducer;