import axios from 'axios'

const getReandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max))
}
console.log(`random number${getReandomInt(20)}`)

export const FETCHING_ACTIVITY_START = 'FETCHING_ACTIVITY_START';
export const FETCHING_ACTIVITY_SUCCESS = 'FETCHING_ACTIVITY_SUCCESS';
export const FETCHING_ACTIVITY_FAILURE = 'FETCHING_ACTIVITY_FAILURE';

export const fetchActivityC = () => dispatch => {
    dispatch({type: FETCHING_ACTIVITY_START})
    axios.get(`https://rickandmortyapi.com/api/character`)
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCHING_ACTIVITY_SUCCESS, 
                payload:res.data.results })
        })
        .catch(err => {
            dispatch ({ type: FETCHING_ACTIVITY_FAILURE, 
                payload: err.response})
        })
}
export const fetchActivityL = () => dispatch => {
    dispatch({ type: FETCHING_ACTIVITY_START})
    axios.get("https://rickandmortyapi.com/api/location")
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCHING_ACTIVITY_SUCCESS, 
                payload:res.data.results })
        })
        .catch(err => {
            dispatch ({ type: FETCHING_ACTIVITY_FAILURE, 
                payload: err.response})
        })
}
export const fetchActivityE = () => dispatch => {
    dispatch({ type: FETCHING_ACTIVITY_START})
    axios.get("https://rickandmortyapi.com/api/episode")
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCHING_ACTIVITY_SUCCESS, 
                payload:res.data.results })
        })
        .catch(err => {
            dispatch ({ type: FETCHING_ACTIVITY_FAILURE, 
                payload: err.response})
        })
}
