import React, { useEffect,useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import '../Homepage/home.css'
import MovieList from '../../Components/moviList/MoviList';

const Home=()=> {
const [popularMovies ,setPopulerMovie]= useState([])

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
        .then((response) => response.json())
        .then(data=> setPopulerMovie(data.results))
        //.then(data=> console.log(data.results))
       
    },[])
 

  return (
    <div>
        <Carousel 
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          transitionTime={3}
        > 
        
        {
                        popularMovies.map(movie => (
                            
                            <Link style={{textDecoration:"none",color:'white'}} to={`/movie/${movie.id}`} key={movie.id}>
                                <div className="posterImage" >
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt=""/>
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
       </Carousel>
       <div className='bg-dark'>
       <MovieList/>
       </div>
      
    </div>
  )
}
export default Home;



