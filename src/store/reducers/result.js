import * as actionTypes from '../action';

const initialState = {
    results: []
}
const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.STORE_RESULT){
        return {
            ...state,
            results: state.results.concat({id: new Date(), value: action.result})
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