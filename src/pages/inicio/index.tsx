import { useEffect, useState } from "react";
import Header from "../../components/layout/header";
import { InicioContainer } from "./style";
import { api } from "../../service/api";
import { TypeMovieApi } from "../../interface/GlobalTypes";
import Loading from "../../components/reusable/loading/index";
import { Link } from "react-router-dom";
import { TopSite } from "../../utils";
/*Abaixo são da lib de slide*/
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


export default function Inicio(){

   const [ movies, setMovies ] = useState <TypeMovieApi[]>([])

   const [loadingMovies, setLoadingMovies] = useState(false);

   useEffect(() => {
      const fetchMovies = async() => {
         setLoadingMovies(true)
         const url = "/Movies"
         try {
            const response = await api.get(url)
            const movies = response.data
            if(movies.length > 0){
               setLoadingMovies(false)
               return setMovies(movies)
            }   
         }catch(e){
            console.log(e)
            setLoadingMovies(false)
         }
      }
      fetchMovies();
   },[])

   return (
    <>
     <Header/>
      <InicioContainer>

      <div className="container-slider-movies" >
         <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
         >
          <SwiperSlide><img src="https://images3.alphacoders.com/106/thumb-1920-1065466.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images6.alphacoders.com/101/thumb-1920-1012489.jpg" alt="" /></SwiperSlide>
        </Swiper>
      </div>
   
      { loadingMovies && <Loading /> }
      {!loadingMovies && movies && (
         <div className="container-only-container-grid">
         <div className="container-grid-all">
          {movies.map( (movie) => {
            if(movie.category === 'serie'){
               return (
                  <div className="container-all-movies" key={movie.id}>
                     <p className="names-movies">{movie.nameMovie}</p>
                     <Link onClick={TopSite} to={`/Series/${movie.slug}`}><img className="img-movies" src={movie.image} alt="" /></Link>
                  </div>
               )
            } else if (movie.category === 'movie'){
               return (
                  <div className="container-all-movies" key={movie.id}>
                     <p className="names-movies">{movie.nameMovie}</p>
                     <Link onClick={TopSite} to={`/Filmes/${movie.slug}`}><img className="img-movies" src={movie.image} alt="" /></Link>
                  </div>
               )
            }
          })}
         </div>
       </div>
      )}
     </InicioContainer>
    </>
   )
} 