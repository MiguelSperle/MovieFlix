import { SeriesContainer } from "./style";
import Header from "../../components/layout/header/index";
import { useEffect, useState } from "react";
import { TypeMovieApi } from "../../interface/GlobalTypes";
import { api } from "../../service/api";
import Loading from "../../components/reusable/loading/index";
import { Link } from "react-router-dom";
import { TopSite } from "../../utils/index";

export default function SeriePages(){

    const [ onlySeries, setOnlySeries ] = useState <TypeMovieApi[]>([])
    
    const [ loadingOnlySeries, setLoadingOnlySeries ] = useState(false)

    useEffect(() => {
        const fetchSeries = async() => {
            setLoadingOnlySeries(true)
            const url = "/Movies"
            try {
                const response = await api.get(url)
                const Series = response.data
                if(Series.length > 0) {
                    setLoadingOnlySeries(false)
                    return setOnlySeries(Series)
                }
            }catch(e){
                console.log(e)
                setLoadingOnlySeries(false)
            }
        }
        fetchSeries()
    },[])


    return (
    <>
    <Header/>
        <SeriesContainer>
            {loadingOnlySeries && <Loading/>}
            {!loadingOnlySeries && onlySeries && (
                <div className="container-grid-OnlySeries">
                    {onlySeries.map( (serie) => {
                      if(serie.category === 'serie'){
                        return (
                            <div className="container-all-series" key={serie.id}>
                                <p className="name-series">{serie.nameMovie}</p>
                                <Link to={`/Series/${serie.slug}`} onClick={TopSite}><img className="img-series" src={serie.image} alt="" /></Link>
                            </div>
                        )
                      }
                    })}
                </div>
            )}      
        </SeriesContainer>
    </>
    )
}