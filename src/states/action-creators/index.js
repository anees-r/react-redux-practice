export const sellShare = (amount) => {
    return (dispatch)=>{
        dispatch({
            type:"sell",
            payload: amount
        })
    }
}

export const buyShare = (amount) => {
    return (dispatch)=>{
        dispatch({
            type:"buy",
            payload: amount
        })
    }
}