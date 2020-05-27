import axios from 'axios';
const MOVIE_DETAILS = "app/movieDetails/MOVIE_DETAILS";
const api_key = "5add7b6e033ad6399931f3003a7e222"
export default function reducer(state = {}, action) {

    switch (action.type) {

        case MOVIE_DETAILS:

            return { ...state, data: { ...action.value } }
        default:
            return state

    }
}

export function movieDetails(value) {

    return { type: MOVIE_DETAILS, value }
}

export function getmovieDetails(api_key, movie_id) {
    console.log(movie_id)
    return (dispatch, getState) => {

        console.log(api_key)
        axios
            .get("https://api.themoviedb.org/3/movie/" + movie_id + "?api_key=" + api_key)

            .then((response) => {
                dispatch(movieDetails(response))
            })

    }

}