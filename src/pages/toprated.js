import React, { useEffect } from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { gettopRated } from '../ducks/topRated';
import Star from './star.png'
import { Table } from 'react-bootstrap';


function Toprated() {

  const api_key = "5add7b6e033ad6399931f3003a7e2229"

  const dispatch = useDispatch();
  var base_url = "http://image.tmdb.org/t/p/w185"
  const store = useSelector((store) => {
    return store.topRated.data
  })

  console.log(store);

  useEffect(() => {

    dispatch(gettopRated(api_key));


  }, [])
  return (
    <>
      <h1 style={{ color:"#FF6347"}}>Top Rated Movies</h1><br />

      {store ? store.data.results.map((top) => {

        return <Table striped bordered hover size="sm">

          <tbody>
            <tr>
              <td style={{ width: "50px" }}><img height="40px" width="40px" alt="image not available" src={base_url + top.poster_path} /></td>
              <td style={{ width: "300px" }}> <Link to={{ pathname: "moviedetails/"+top.id, state: { movie_id: top.id } }}>{top.title}</Link></td>
              <td style={{ width: "200px" }}><img width="25px" height="25px" src={Star} /> &nbsp;&nbsp;{top.vote_average}</td>
            </tr>

          </tbody>
        </Table>
      }) : null}

    </>
  );
}

export default Toprated;