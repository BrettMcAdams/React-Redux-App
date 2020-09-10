import axios from 'axios'

// Action Types

export const FETCH_CHARACTER = 'FETCH_CHARACTER';
export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS';
export const FETCH_CHARACTER_ERROR = 'FETCH_CHARACTER_ERROR';

// Action Creators

export const fetchCharacter = ()  => {
    return (dispatch) => {
        dispatch({ type: FETCH_CHARACTER });
        axios.get('https://www.breakingbadapi.com/api/characters?limit=3')
            .then(res => {
                console.log(res);
                dispatch({ type: FETCH_CHARACTER_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_CHARACTER_ERROR, payload: "Whoops! Can't get your character for you!"})
            })
    }
}