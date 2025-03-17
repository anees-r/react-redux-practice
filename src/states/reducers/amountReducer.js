const amountReducer = (state = 0, action) => {
    if(action.type === 'buy'){
        return state - action.payload
    }

    else if(action.type === 'sell'){
        return state + action.payload
    }

    else{
        return state;
    }
}

export default amountReducer;