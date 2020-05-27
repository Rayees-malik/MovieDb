import axios from 'axios';
const PERSON_DETAILS = "app/personDetails/PERSON_DETAILS";
const api_key = "5add7b6e033ad6399931f3003a7e222"
export default function reducer(state = {}, action) {

    switch (action.type) {

        case PERSON_DETAILS:

            return { ...state, data: { ...action.value } }
        default:
            return state

    }
}

export function personDetails(value) {

    return { type: PERSON_DETAILS, value }
}

export function getpersonDetails(api_key, person_id) {
    return (dispatch, getState) => {

        axios
            .get("https://api.themoviedb.org/3/person/"+person_id+"/movie_credits?api_key="+api_key)

            .then((response) => {
                dispatch(personDetails(response))
            })

    }

}