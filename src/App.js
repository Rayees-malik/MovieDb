import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Trending from './pages/trending.js'
import Home from './pages/home.js'
import Moviedetails from './pages/movieDetails.js'
import Top_rated from './pages/toprated.js'
import Person_details from './pages/personDetails.js'
import Search_movies from './pages/searchMovies.js'
import { BrowserRouter as Router, Route,useLocation } from "react-router-dom";
import Header from './components/header.js'
import Footer from './components/footer.js'

function App(props) {

  console.log(props)
  return (

    <Router>
      <Header />

      <Route path='/' exact component={Home} />
      <Route path='/trending' exact component={Trending} />
      <Route path='/moviedetails'  exact component={Moviedetails} />
      <Route path='/toprated' exact component={Top_rated} />
      <Route path='/persondetails' exact component={Person_details} />
      <Route path='/searchmovies' exact component={Search_movies} />


<Footer/>

    </Router>
  );
}

export default App;
