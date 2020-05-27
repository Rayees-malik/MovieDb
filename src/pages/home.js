import React, { useEffect } from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getTrending } from '../ducks/trending';
import Star from './star.png'

function Home() {

  const api_key = "5add7b6e033ad6399931f3003a7e2229"

  const dispatch = useDispatch();
  var base_url = "http://image.tmdb.org/t/p/w185"
  const store = useSelector((store) => {
    return store.trending.data
  })

  console.log(store);

  useEffect(() => {

    dispatch(getTrending(api_key));


  }, [])
  return (
    <>
      {store ? store.data.results.map((item) => {

        return <Figure>
          <a href=""> <Figure.Image
            className="imagedisplay"
            alt="171x180"
            src={base_url + item.poster_path} /></a>
          <Figure.Caption className="captiondisplay">
            < img width="30px" height="30px" src={Star} />&nbsp;&nbsp;
            {item.vote_average}
          </Figure.Caption>
          <Figure.Caption className="detailsdisplay">
            <Link to={{ pathname: "/moviedetails/", state: { movie_id: item.id } }}>Details</Link>
          </Figure.Caption>
        </Figure>

      }) : null

      }
    </>
  );
}

export default Home;