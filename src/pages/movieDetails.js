import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getmovieDetails } from '../ducks/movieDetails';
import { getmovieCast } from '../ducks/movieCast';
import { Link } from 'react-router-dom'

import { Card, Table, ListGroup } from 'react-bootstrap';
import Star from './star.png'

function Moviedetails(props) {

    const movie_id = props.location.state.movie_id
    const api_key = "5add7b6e033ad6399931f3003a7e2229"

    const dispatch = useDispatch();
    var base_url = "http://image.tmdb.org/t/p/w185"

    const store = useSelector((store) => {
        return store.movieDetails.data
    })
    console.log(store);

    const cast_store = useSelector((store) => {
        return store.movieCast.data
    })

    console.log(cast_store);

    useEffect(() => {

        dispatch(getmovieDetails(api_key, movie_id));
        dispatch(getmovieCast(api_key, movie_id));


    }, [])


    return (
        <>
            {store ?
                <>
                    <Card>

                        <Card.Header><h1>{store.data.original_title}</h1>
                            <h4 >{store.data.vote_average}</h4>
                            <img width="30px" height="30px" src={Star} />&nbsp;
                     </Card.Header>
                        <Card.Body>

                            <Card.Title><h4>{store.data.tagline}</h4></Card.Title>
                            <Card.Text>
                                {store.data.overview}
                            </Card.Text>
                        </Card.Body>
                        {store.data.poster_path ? <Card.Img className="cardimagedisplay" src={base_url + store.data.poster_path} /> :

                            <Card.Img className="cardimagedisplay" src="https://icons.iconarchive.com/icons/danleech/simple/512/imdb-icon.png" />}<br /><br />
                    </Card>

                </>
                : null}

            <h2>Cast and Crew</h2><br />
            {cast_store ? cast_store.data.cast.map((cast) => {

                return cast.profile_path ? <Table striped bordered hover size="sm">

                    <tbody>
                        <tr>
                            <td style={{ width: "50px" }}><img height="40px" width="40px" alt="image not available" src={base_url + cast.profile_path} /></td>
                            <td style={{ width: "300px" }}> <Link to={{ pathname: "/persondetails", state: { person_id: cast.id } }}>{cast.name}</Link></td>
                            <td style={{ width: "200px" }}>{cast.character}</td>
                        </tr>

                    </tbody>
                </Table> : null


            }) : null}

            <br /><br />

            <h1>Production</h1> <br />

            {store ? store.data.production_companies.map((companies) => {

                return companies.logo_path ? <Table striped bordered hover size="sm">

                    <tbody>
                        <tr>
                            <th style={{ width: "50px" }}><img height="50px" width="100px" alt="loading error" src={base_url + companies.logo_path} /></th>
                            <th style={{ width: "400px", textAlign: "left" }}>{companies.name}</th>
                            <th style={{ width: "50px", textAlign: "left" }}>{companies.origin_country}</th>
                        </tr>

                    </tbody>
                </Table> : null

            }) : null}


        </>
    );
}

export default Moviedetails