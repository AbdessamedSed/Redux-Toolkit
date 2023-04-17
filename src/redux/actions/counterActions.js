import { DECREMENT, INCREMENT, INC_BY_VALUE } from "./types"


export const incrementAction = async (dispatch) => {
    return dispatch({type: INCREMENT})
}

export const decrementAction = async (dispatch) => {
    return dispatch({type: DECREMENT})
}

export const incrementByValue = (v1, dispatch) => {
    return dispatch({
        type: INC_BY_VALUE,
        payload: v1
    })
}