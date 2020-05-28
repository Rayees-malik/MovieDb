import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { Form, Figure ,Button} from 'react-bootstrap';
import Star from './star.png'
import { gettvShows } from '../ducks/tvshows';
import { getmovieDetails } from '../ducks/movieDetails';

function Tvshows(props) {
    const [tv, setTv] = useState({ sortby: "" })


    // const movie_id = props.location.state.movie_id
    const api_key = "5add7b6e033ad6399931f3003a7e2229"

    const dispatch = useDispatch();
    var base_url = "http://image.tmdb.org/t/p/w185"

    const store = useSelector((store) => {
        return store.tvShows.data
    })
    console.log(store);


    useEffect(() => {

        dispatch(gettvShows(api_key,tv.sortby));


    }, [])
    const handleSearch = () => {

        dispatch(gettvShows(api_key, tv.sortby));
        setTv({ ...tv, sortby: "" })

    }
    console.log(tv.sortby)
    return (
        <>
            <Form>
                <Form.Group style={{ width: "15%", float: "right" }} controlId="exampleForm.SelectCustomSizeSm">
                    <Form.Label>Custom select Small</Form.Label>
                    <Form.Control as="select" size="sm" custom value={tv.sortby}
                        onChange={(e) => {
                            handleSearch()
                            setTv({ ...tv, sortby: e.target.value })



                        }}>
                        <option>popularity.asc</option>
                        <option>popularity.desc</option>
                        <option>vote_average.asc</option>
                        <option>vote_average.desc</option>
                        <option>first_air_date.asc</option>
                        <option> first_air_date.desc</option>
                    </Form.Control>
                </Form.Group>
            </Form>


            <br /><br />

            <h1 style={{ textAlign: "center", color: "#FF6347	" }}>MovieDB</h1><br />
            {store ? store.data.results.map((item) => {

                return   <Figure>
                   
                   { item.poster_path?
                    <a href=""> <Figure.Image
                        className="imagedisplay"
                        alt="171x180"
                        src={base_url + item.poster_path} /></a>: <a href=""> <Figure.Image
                        className="imagedisplay"
                        alt="171x180"
                        src="https://icons.iconarchive.com/icons/danleech/simple/512/imdb-icon.png" /></a>}
                    <Figure.Caption className="captiondisplay">
                        < img width="30px" height="30px" src={Star} />&nbsp;&nbsp;
            {item.vote_average}
                    </Figure.Caption>
                    <Figure.Caption className="detailsdisplay">
                        <Link to={{ pathname: "/moviedetails/" + item.id, state: { movie_id: item.id } }}>Details</Link>
                    </Figure.Caption>
                </Figure>

            }) : null

            }
        </>
    );
}

export default Tvshows;