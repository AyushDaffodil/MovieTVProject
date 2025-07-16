import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import axios from "axios";
import type { searchDataProps, searchProps } from "../Home/type";
import { memo } from "react";
import './style.css'

const All = ({
    searchData,
    page = undefined,
    handlePageLeft,
    handlePageRight
}: searchDataProps) => {

    const [data, setData] = useState<searchProps>([]);
    useEffect(() => {
        if (searchData) {
            setData(searchData);
        }
        else {
            const fetchdata = async () => {
                const backdata = await axios.get(`http://localhost:5000/route/all/${page}`)
                setData(backdata.data);
            }
            fetchdata();
        }
    }, [searchData, page]);

    return (
        <div>
            <h1 className="Totals">
                All <span>({data.total_results})</span>
            </h1>
            <div className="HomeCard">
                {
                    data?.results?.map((data) => (
                        <Card
                            posterImage={data.poster_path}
                            id={data.id}
                            media_type={data.media_type}
                            original_title={data.original_title}
                            name={data.name}
                            vote_average={data.vote_average?.toFixed(1)}
                        />
                    ))
                }
            </div>
            <div className="AdjustPagination">
                <div className='pagination'>
                    <h1>Page No. {page}</h1>
                    {
                        page == 1 ? <div>  </div> : <button onClick={() => handlePageLeft()}>&lArr;</button>
                    }
                    {
                        page == searchData?.total_pages ? <div></div> : <button onClick={() => handlePageRight()}>&rArr;</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default memo(All);