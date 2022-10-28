import React from 'react'
import Banner from '../Banner';
import "./HomeScreen.css";
import Nav from '../Nav';
import requests from '../Requests';
import Row from '../Row';
// https://netflix-clone-25739.web.app
function HomeScreen() {
  return (
    <div className='homescreen'>
      <Nav />
      <Banner />
      <Row
        title='NETFLIX ORIGINAL'
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchURL={requests.fetchTending}/>
      <Row title='Top Rated' fetchURL={requests.fetchTopRated}/>
      <Row title='Action Movies' fetchURL={requests.fetchActionMovie}/>
      <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovie}/>
      <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovie}/>
      <Row title='Romance Movies' fetchURL={requests.fetchRomanceMovie}/>
      <Row title='Documentaries' fetchURL={requests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen