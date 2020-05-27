import axios from 'axios';
const MOVIE_CAST = "app/movieCast/MOVIE_CAST";
const api_key = "5add7b6e033ad6399931f3003a7e222"
export default function reducer(state = {}, action) {

    switch (action.type) {

        case MOVIE_CAST:

            return { ...state, data: { ...action.value } }
        default:
            return state

    }
}

export function movieCast(value) {

    return { type: MOVIE_CAST, value }
}

export function getmovieCast(api_key, movie_id) {
    console.log(movie_id)
    return (dispatch, getState) => {

        axios
            .get("http://api.themoviedb.org/3/movie/" + movie_id + "/casts?api_key=" + api_key)

            .then((response) => {
                dispatch(movieCast(response))
            })

    }

}