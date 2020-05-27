import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getsearchMovies } from '../ducks/searchMovies';
import { Card, Table, ListGroup } from 'react-bootstrap';
import Star from './star.png'
import { Link } from "react-router-dom";

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';

function Searchmovies(props) {

    const api_key = "5add7b6e033ad6399931f3003a7e2229"
    var base_url = "http://image.tmdb.org/t/p/w185"

    const search_store = useSelector((store) => {
        return store.searchMovies.data
    })
console.log(search_store)
   

    console.log(search_store);

    return (
       <>
       {search_store?search_store.data.results.map((searchResults)=>{

return  <MDBRow style={{display:"inline-block"}}>
<MDBCol>
  <MDBCard style={{ width: "28rem"  }}>
  {searchResults.poster_path? <MDBCardImage cascade className="img-fluid"style={{ width: "25em",height:"20em"  }} src={base_url+searchResults.poster_path} />:<MDBCardImage cascade className="img-fluid"style={{ width: "25em",height:"20em"  }} src="https://icons.iconarchive.com/icons/danleech/simple/512/imdb-icon.png" />}
    <MDBCardBody cascade>
       <MDBCardTitle><Link to={{pathname:"/moviedetails", state:{movie_id:searchResults.id}}}>{searchResults.title}</Link> <br/> <img width="30px" height="30px" src={Star}/>&nbsp;&nbsp; {searchResults.vote_average}</MDBCardTitle>
       <MDBCardText style={{height:"300px"}}>{searchResults.overview}</MDBCardText>
    </MDBCardBody>
  </MDBCard>
</MDBCol>



</MDBRow>}):null}

</>
    );
}

export default Searchmovies