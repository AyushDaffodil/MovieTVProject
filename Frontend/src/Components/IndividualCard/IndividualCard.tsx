import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import type { idprops, QueryProps } from "./types";
import { individualDummydata, type individualDummydataprops } from "../../assets/Dummydata";
// import { tvdata } from "../../assets/tvDummydata";

import './style.css'
import axios from "axios";
import MovieContent from "./MovieContent/MovieContent";
import TvContent from "./TvContent/TvContent";


const IndividualCard = () => {

    const [individualData, setIndividualData] = useState<individualDummydataprops>();
    const navigate = useNavigate();
    const { id } = useParams<idprops>();
    const [searchParams, setSearchParams] = useSearchParams<QueryProps>();
    const category = searchParams?.get('category');


    // const options = {
    //     method: 'GET',
    //     url: `https://api.themoviedb.org/3/${category}/${id}?external_source=tmdb_id`,
    //     headers: {
    //         accept: 'application/json',
    //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGZmYWRmZmM2Y2ViNThjODNkYjBhZGU2MTYzYWZkZiIsIm5iZiI6MTc1MDkzNDA3Mi41MjksInN1YiI6IjY4NWQyMjM4Yjc1MzE5YTEwNjRkMTA3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KZQ8Ov5gcwYl61lgqdwJieCvYc4ffSYy4tZo735wj9I'
    //     }
    // };
    useEffect(() => {
        async function call() {
            const backdata = await axios.post(`http://localhost:5000/route/${id}`, {
                category
            });
            setIndividualData(backdata.data);
        }
        call();
    }, [])


    if (!id) {
        navigate('/');
    }
    // useEffect(() => {
    //     axios
    //         .request(options)
    //         .then(res => {
    //             setIndividualData(res.data);
    //         }).catch(err => console.error(err));
    // }, [])

    return (
        <div className="Icard">
            <div className="backPoster">
                <img src={`https://image.tmdb.org/t/p/w500/${individualData?.backdrop_path}`} alt="poster_path" />
                <div className="title">
                    <h2>MaileHereko / <span>{category}s</span></h2>
                    {category == 'movie' ? (
                        <h1>{individualData?.original_title}</h1>
                    ) : (
                        <h1>{individualData?.name}</h1>
                    )}
                </div>
            </div>
            <div className="Content">
                <div className="poster">
                    <img src={`https://image.tmdb.org/t/p/w500/${individualData?.poster_path}`} alt="poster_path" />
                </div>
                <div className="poster2">
                    {category == 'movie' ? (
                        <MovieContent
                            type={category}
                            genres={individualData?.genres}
                            overview={individualData?.overview}
                            release_date={individualData?.release_date}
                            runtime={individualData?.runtime}
                            vote_average={individualData?.vote_average}
                            tagline={individualData?.tagline}
                        />
                    ) : (
                        <TvContent
                            type={category}
                            status={individualData?.status}
                            genres={individualData?.genres}
                            overview={individualData?.overview}
                            episode_run_time={individualData?.episode_run_time}
                            first_air_date={individualData?.first_air_date}
                            last_air_date={individualData?.last_air_date}
                            seasons={individualData?.seasons}
                            vote_average={individualData?.vote_average}
                            tagline={individualData?.tagline}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
export default IndividualCard