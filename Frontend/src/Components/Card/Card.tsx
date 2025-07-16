import { useNavigate } from "react-router-dom";
import { imagePath } from "../../constants/svgFilepath";
import './Style.css'
import type { CardProps } from "./type";

const Card = ({
    posterImage,
    id,
    media_type,
    original_title = '',
    name = '',
    vote_average = 0,
}: CardProps) => {


    const navigate = useNavigate();

    function handleSubmit() {
        navigate(`/${id}?category=${media_type}`);
    }

    return (
        <div className="card">
            <img onClick={handleSubmit} className="posterImage" src={`https://image.tmdb.org/t/p/w300/${posterImage}`} alt="posterImage" />
            <div className="star">
                <img src={imagePath.star} alt="" />
                <h1>{vote_average}</h1>
            </div>
            <div className="titleName">
                {media_type == 'movie' ? (
                    <h2 className="Title">{original_title}</h2>
                ) : (
                    <h2 className="Title">{name}</h2>
                )}
            </div>
        </div>
    )

}

export default Card;