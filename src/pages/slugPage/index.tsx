import { useParams } from "react-router-dom"; 
import { SlugContainerSeries } from "./style";
import { useEffect, useState } from "react";
import { TypeMovieApi } from "../../interface/GlobalTypes";
import { api } from "../../service/api";
import Header from "../../components/layout/header/index";
import Loading from "../../components/reusable/loading/index";

export default function SlugMovies(){

    const { slug } = useParams()

    const [ OnlyMovieSlug, setOnlyMovieSlug ] = useState <TypeMovieApi>()

    const [loadingPicture, setLoadingPicture ] = useState(false)

    useEffect(() => {
        const fetchSlugApi = async() => {
          setLoadingPicture(true)
            const url = "/Movies"
            try {
                const response = await api.get<TypeMovieApi[]>(url)
                const selectedItem = response.data.find((movie) => movie.slug === slug)
                if(selectedItem){
                  setLoadingPicture(false)
                  return setOnlyMovieSlug(selectedItem)
                }    
            }catch(e){
                console.log(e)
                setLoadingPicture(false)
            }
        }
        fetchSlugApi()
    },[])

    
    return (
    <>
      <Header/>
       <SlugContainerSeries>
        {loadingPicture && <Loading/>}
        {!loadingPicture &&  OnlyMovieSlug && (
          <div className="container-all-slug-movies">
            <div className="container-image">
              <img className="img" src={OnlyMovieSlug?.image} alt="" />
            </div>

          <div className="container-info-slug-movies">
            <h2 className="name-info-slug-movies">{OnlyMovieSlug?.nameMovie}</h2>
            <p className="minutes-info-slug-movies">Duração de {OnlyMovieSlug?.minutes}</p>
            <p className="description-info-slug-movies">{OnlyMovieSlug?.description}</p>
            <button className="button-slug-movies">Assistir</button>
          </div>
        </div>
        )}
       </SlugContainerSeries>
    </>
    )
}