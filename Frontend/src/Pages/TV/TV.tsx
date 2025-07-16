import axios from "axios";
import { memo, useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import './style.css'
import type { OutletProps2, searchDataProps, searchProps } from "../Home/type";
import { useOutletContext } from "react-router-dom";

const TV = ({
    searchData,
    page = undefined,
    handlePageLeft,
    handlePageRight
}: searchDataProps) => {
    const [data, setData] = useState<searchProps>([]);
    const context = useOutletContext<OutletProps2>();
    // const options = {
    //     method: 'GET',
    //     url: `https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=${page ? page : context?.outlet?.page2}`,
    //     headers: {
    //         accept: 'application/json',
    //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGZmYWRmZmM2Y2ViNThjODNkYjBhZGU2MTYzYWZkZiIsIm5iZiI6MTc1MDkzNDA3Mi41MjksInN1YiI6IjY4NWQyMjM4Yjc1MzE5YTEwNjRkMTA3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KZQ8Ov5gcwYl61lgqdwJieCvYc4ffSYy4tZo735wj9I'
    //     }
    // };

    useEffect(() => {
        if (context?.outlet.outletSearchData) {
            setData(context?.outlet.outletSearchData);
        }
        else if (searchData) {
            setData(searchData);
        }
        else {
            if (!searchData) {
                const call = async () => {
                    const finalPage = page ? page : context.outlet.page2;
                    const backdata = await axios.get(`http://localhost:5000/route/tv/${finalPage}`)
                    setData(backdata.data);
                }
                call();
            }
        }
    }, [searchData, page, context?.outlet.location, context?.outlet.outletSearchData, page, context?.outlet?.page2])

    // useEffect(() => {
    //     if (searchData) {
    //         setData(searchData);
    //     }
    //     else {
    //         if (!context?.outlet?.outletSearchData) {
    //             axios(options)
    //                 .then(res => setData(res.data))
    //                 .catch(err => console.error(err));
    //         }
    //     }
    // }, [searchData, page])


    return (
        <div>
            {
                (location.pathname == '/movies' || location.pathname == "/tv") ? <h1 className="Totals">
                    <span>({data.total_results}) items</span>
                </h1> : <h1 className="Totals">
                    TV <span>({data.total_results})</span>
                </h1>
            }
            <div className="HomeCard">
                {
                    data?.results?.map((data) => (
                        <Card
                            posterImage={data.poster_path}
                            id={data.id}
                            media_type='tv'
                            original_title={data.original_title}
                            name={data.name}
                            vote_average={data.vote_average?.toFixed(1)}
                        />
                    ))
                }
            </div>
            {
                (location.pathname == '/movies' || location.pathname == "/tv") ? (
                    <div className="AdjustPagination">
                        <div className='pagination'>
                            <h1>Page No. {context?.outlet?.page2}</h1>
                            {
                                context?.outlet?.page2 == 1 ? <div></div> : <button onClick={() => context?.outlet?.handlePageLeft2()}>&lArr;</button>
                            }
                            {
                                context?.outlet?.page2 == context?.outlet?.outletSearchData?.total_pages ? <div></div> : <button onClick={() => context?.outlet?.handlePageRight2()}>&rArr;</button>
                            }
                        </div>
                    </div>
                ) : (
                    <div className="AdjustPagination">
                        <div className='pagination'>
                            <h1>Page No. {page}</h1>
                            {
                                page == 1 ? <div></div> : <button onClick={() => handlePageLeft()}>&lArr;</button>
                            }
                            {
                                page == searchData?.total_pages ? <div></div> : <button onClick={() => handlePageRight()}>&rArr;</button>
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default memo(TV);





