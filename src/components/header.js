import React, { useState, useEffect } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Card, Dropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getsearchMovies } from '../ducks/searchMovies';
import './header.css';
function Header() {
    const [search, setSearch] = useState({ movies: "" });
    console.log(search.movies)
    const api_key = "5add7b6e033ad6399931f3003a7e2229"
    var base_url = "http://image.tmdb.org/t/p/w185"

    const dispatch = useDispatch();
    const search_store = useSelector((store) => {
        return store.searchMovies.data
    })
    console.log(search_store)
    const handleSearch = () => {

        dispatch(getsearchMovies(api_key, search.movies))
        setSearch({ ...search, movies: "" })

    }


    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand style={{ color:"#FF6347"}} href="/">IMDb</Navbar.Brand>
                <Nav className="mr-auto">
                    <NavLink className="navlinkmovies" to="/">Home</NavLink>
                    <NavLink to="/toprated">Top Rated Movies</NavLink>
                    <NavLink to="/tvshows">Tv shows</NavLink>
                    <NavLink to="/trending">Trending</NavLink>
                    <NavLink to="/about">About</NavLink>



                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"
                        value={search.movies}
                        onChange={(e) => {
                            handleSearch()
                            setSearch({ ...search, movies: e.target.value })



                        }}

                    />

                    <Link to={{ pathname: '/searchmovies' }}> <Button variant="outline-info" onClick={handleSearch}>Search</Button></Link>
                </Form>
            </Navbar>

            <br />
        </>
    );
}

export default Header