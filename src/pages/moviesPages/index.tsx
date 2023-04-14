import { useEffect, useState } from "react";
import Header from "../../components/layout/header";
import { MoviesContainer } from "./style";
import { TypeMovieApi } from "../../interface/GlobalTypes";
import { api } from "../../service/api";
import Loading from "../../components/reusable/loading/index";
import { Link } from "react-router-dom";
import { TopSite } from "../../utils/index";

export default function MoviesPages(){

    const [ onlyMovies, setOnlyMovies ] = useState<TypeMovieApi[]>([])

    const [ loadingOnlyMovies, setLoadinOnlyMovies ] = useState(false)

    useEffect(() => {
        const fetchOnlyMovies = async() => {
            setLoadinOnlyMovies(true)
            const url = "/Movies"
            try {
                const response = await api.get(url)
                const Movies = response.data
                if(Movies.length > 0){
                    setLoadinOnlyMovies(false)
                    return setOnlyMovies(Movies)
                }
            }catch(e){
                console.log(e)
                setLoadinOnlyMovies(false)
            }
        }
        fetchOnlyMovies()
    },[])

    return (
    <>
    <Header/>
       <MoviesContainer>
            {loadingOnlyMovies && <Loading/>}
            {!loadingOnlyMovies && onlyMovies && (
                <div className="container-grid-OnlyMovies">
                    {onlyMovies.map( (movie) => {
                        if(movie.category === 'movie'){
                            return (
                                <div className="container-all-OnlyMovies">
                                    <p className="name-movies">{movie.nameMovie}</p>
                                    <Link to={`/Filmes/${movie.slug}`} onClick={TopSite}><img className="img-movies" src={movie.image} alt="" /></Link>
                                </div>
                            )
                        }
                    })}
                </div>
            )}
        </MoviesContainer>
    </>
    )
}