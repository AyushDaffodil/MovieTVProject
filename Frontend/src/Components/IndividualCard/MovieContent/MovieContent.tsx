import type { MovieContentProps } from "./types"
import './style.css'
import { imagePath } from "../../../constants/svgFilepath"


const MovieContent = ({ type, genres = [], overview, release_date, runtime, vote_average, tagline }: MovieContentProps) => {

    return (
        <>
            <h1 className="tagline">{tagline}</h1>
            <h2 className="overview">{overview}</h2>
            <div className="rate">
                <img src={imagePath.star} alt="" />
                <h1>{vote_average?.toFixed(1)}</h1>
            </div>
            <div className="Tags">
                <h2>Type</h2>
                <h1>{type}</h1>
            </div>
            <div className="Tags">
                <h2>Release Date:</h2>
                <h1>{release_date}</h1>
            </div>
            <div className="Tags">
                <h2>Run time</h2>
                <h1>{runtime}</h1>
            </div>
            <div className="Tags">
                <h2>Genres</h2>
                <div>
                    {
                        genres.map((data, idx) => (<h1>{data.name}{idx == genres.length - 1 ? ('') : (<span>,&nbsp; </span>)}</h1>))
                    }
                </div>
            </div>
        </>
    )
}

export default MovieContent