import axios from 'axios';
const TV_SHOWS = "app/tvshows/TV_SHOWS";
const api_key = "5add7b6e033ad6399931f3003a7e222"
export default function reducer(state = {}, action) {

    switch (action.type) {

        case TV_SHOWS:

            return { ...state, data: { ...action.value } }
        default:
            return state

    }
}

export function tvshows(value) {

    return { type: TV_SHOWS, value }
}

export function gettvShows(api_key,sortby) {
    return (dispatch, getState) => {

        console.log(api_key)
        axios
            .get("https://api.themoviedb.org/3/discover/tv?api_key="+api_key+"&language=en-US&sort_by="+sortby+"&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false")

            .then((response) => {
                dispatch(tvshows(response))
            })

    }

}