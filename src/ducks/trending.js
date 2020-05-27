import axios from 'axios';
const TRENDING = "app/trending/TRENDING";
const api_key="5add7b6e033ad6399931f3003a7e222"
export default function reducer(state={},action){

  switch (action.type){

     case TRENDING:

       return {...state, data:{...action.value}}
       default:
         return state
    
       }
     }

export function trending(value){

   return {type: TRENDING,value}
}

export function getTrending(api_key){

  return(dispatch,getState)=>{

console.log(api_key)
    axios
    .get("https://api.themoviedb.org/3/trending/all/day?api_key="+api_key)
    
    .then((response)=>{
     dispatch(trending(response))
    })

}

}