import axios from 'axios';
const TOP_RATED = "app/movieDetails/TOP_RATED";
const api_key = "5add7b6e033ad6399931f3003a7e222"
export default function reducer(state = {}, action) {

    switch (action.type) {

        case TOP_RATED:

            return { ...state, data: { ...action.value } }
        default:
            return state

    }
}

export function topRated(value) {

    return { type: TOP_RATED, value }
}

export function gettopRated(api_key, movie_id) {
    console.log(movie_id)
    return (dispatch, getState) => {

        console.log(api_key)
        axios
            .get("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key="+api_key)

            .then((response) => {
                dispatch(topRated(response))
            })

    }

}