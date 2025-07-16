import { imagePath } from "../../../constants/svgFilepath";
import type { TvContentProps } from "./type";
import './style.css'


const TvContent = (
    {
        type = '',
        status,
        genres = [],
        overview,
        episode_run_time,
        first_air_date,
        last_air_date,
        seasons = [],
        vote_average,
        tagline
    }: TvContentProps) => {
    return (
        <>
            <h1 className="tagline">{tagline}</h1>
            <h2 className="overview">{overview}</h2>
            <div className="rate">
                <img src={imagePath.star} alt="" />
                <h1>{vote_average?.toFixed(1)}</h1>
            </div>
            <div className="tvContent">
                <div>
                    <h2>Type</h2>
                    <h1>{type}</h1>
                </div>
                <div>
                    <h2>Status</h2>
                    <h1>{status}</h1>
                </div>
                <div>
                    <h2>First air date</h2>
                    <h1>{first_air_date}</h1>
                </div>
                <div >
                    <h2>last air date</h2>
                    <h1>{last_air_date}</h1>
                </div>
                <div>
                    <h2>No. of Seasons</h2>
                    <h1>{seasons.length}</h1>
                </div>
                <div>
                    <h2>No. of episodes</h2>
                    <h1>{seasons?.reduce((acc, val) => {
                        return (acc = (acc + (val?.episode_count ? val?.episode_count : 0)))
                    }, 0)}</h1>
                </div>
                <div>
                    <h2>Episode run time</h2>
                    <h1>{episode_run_time}</h1>
                </div>
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
export default TvContent;