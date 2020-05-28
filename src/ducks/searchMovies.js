import axios from 'axios';
const SEARCH_MOVIES = "app/searchmovies/SEARCH_MOVIES";
const api_key = "5add7b6e033ad6399931f3003a7e222"
export default function reducer(state = {}, action) {

    switch (action.type) {

        case SEARCH_MOVIES:

            return { ...state, data: { ...action.value } }
        default:
            return state

    }
}

export function searchMovies(value) {

    return { type: SEARCH_MOVIES, value }
}

export function getsearchMovies(api_key, search) {
    return (dispatch, getState) => {

        axios
            .get("https://api.themoviedb.org/3/search/movie?api_key=" + api_key, {
                params: {

                    query: search
                }
            }).then((response) => {
                dispatch(searchMovies(response))
            })

    }

}