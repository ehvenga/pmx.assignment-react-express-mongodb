import { dataTypes } from "../actionTypes";
import { axios } from '../../config'

const dataAction = {
    upload: (data, setMessage) => (dispatch) => {
        return axios({
            method: 'post',
            url: 'upload',
            data
        })
        .then(res => {
            dispatch({type: dataTypes.fetch, payload: res.data})
        })
        .catch(err => {
            setMessage(err.response.data.message)
        })
    },
    fetch: (payload) => (dispatch) => {
        dispatch({type: dataTypes.fetch, payload})
    }
}

export default dataAction