import { dataTypes } from "../actionTypes";

const data = (state, action) => {
    state = state || []
    if (action.type === dataTypes.fetch) {
        return state.concat(action.payload)
    }
    else {
        return state
    }
}

export default data