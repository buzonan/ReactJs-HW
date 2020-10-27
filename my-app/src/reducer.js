import {combineReducers} from 'redux';

const size = (state = 0, action) => {
    if(action.type === "INCREASE_COUNTER_SIZE"){
    return action.payload;    
}
    return state;
}

const sum = (state = 0, action) => {
    if(action.type === "INCREASE_TOTAL"){
        return state + 1;  
    } else if(action.type === "DECREASE_TOTAL"){
        return state - 1;
    }
    return state;
}


export default combineReducers({
    size,
    sum
})