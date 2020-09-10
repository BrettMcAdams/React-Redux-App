import { FETCH_CHARACTER, FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_ERROR } from '../actions'

const initialState = {
    character: [],
    loadingCharacter: true,
    errorMessage: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARACTER:
            return {
                ...state,
                loadingCharacter: true
            };
        case FETCH_CHARACTER_ERROR:
            return {
                ...state,
                loadingCharacter: false,
                errorMessage: action.payload.message
            };
        case FETCH_CHARACTER_SUCCESS:
            return {
                ...state,
                character: action.payload,
                loadingCharacter: false
            };
        default:
            return state;
    }
};