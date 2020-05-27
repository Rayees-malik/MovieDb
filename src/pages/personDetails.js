import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getpersonDetails } from '../ducks/personDetails';
import { Card, Table, ListGroup } from 'react-bootstrap';
import Star from './star.png'

function Persondetails(props) {

    const person_id = props.location.state.person_id
    const api_key = "5add7b6e033ad6399931f3003a7e2229"

    const dispatch = useDispatch();
    var base_url = "http://image.tmdb.org/t/p/w185"

    const person_store = useSelector((store) => {
        return store.personDetails.data
    })

   

    console.log(person_store);

    useEffect(() => {

        dispatch(getpersonDetails(api_key, person_id));


    }, [])


    return (
        <><br/>
        <h1>Person Details</h1>
        <br/>
            {person_store?person_store.data.cast.map((person)=>{

            return person.poster_path? <Table striped bordered hover size="sm">

            <tbody>
                <tr>
                    <td style={{ width: "100px" ,height:"200px" }}><img height="300px" width="300px" alt="image not available" src={base_url + person.poster_path} /></td>
            <td style={{ width: "600px" ,height:"200px"}}> {person.title}{person.overview}</td>
                    <td style={{ width: "200px",height:"200px" }}><img width="25px" height="25px" src={Star}/> &nbsp;&nbsp;{person.vote_average}</td>
                </tr>
            
            </tbody>
            </Table>:null}):null}
        </>
    );
}

export default Persondetails