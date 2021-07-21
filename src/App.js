import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}


export default App;

//https://api.themoviedb.org/3/movie/550?api_key=13762a2538aa000b51f50450eb1599b1
// key --- 

// token eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzc2MmEyNTM4YWEwMDBiNTFmNTA0NTBlYjE1OTliMSIsInN1YiI6IjVmOWU0ZTIyNWYyZGIxMDAzODIzYzRlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cPvjVqcQc6HZiNGjQY3944or0RQ6mi2zOWTkNvZkZLE