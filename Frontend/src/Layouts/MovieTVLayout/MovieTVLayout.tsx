import { Outlet, useLocation } from "react-router-dom"
import './style.css'
import Search from "../../Components/Search/Search";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";



const MovieTVLayout = () => {
    const headingMap: Record<string, string> = {
        '/movies': "Movies",
        '/tv': "TV Shows",
        '/suggestMe': "Suggest Me"
    }
    const QueryPath: Record<string, string> = {
        '/movies': "movie",
        '/tv': "tv",
    }

    const [page2, setPage2] = useState(1);

    const handlePageLeft2 = useCallback(() => {
        setPage2((prev) => prev - 1);
    }, [page2])
    const handlePageRight2 = useCallback(() => {
        setPage2((prev) => prev + 1);
    }, [page2])

    const location = useLocation();
    const value = headingMap[location.pathname];

    const [SearchData2, setSearchData2] = useState(undefined);

    const [lastQuery, setLastQuery] = useState<string | undefined>(undefined);


    const fetchdata = useCallback((val: string) => {
        // const options = {
        //     method: 'GET',
        //     url: `https://api.themoviedb.org/3/search/${QueryPath[location.pathname]}?query=${val}&include_adult=false&language=en-US&page=${page2}`,
        //     headers: {
        //         accept: 'application/json',
        //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGZmYWRmZmM2Y2ViNThjODNkYjBhZGU2MTYzYWZkZiIsIm5iZiI6MTc1MDkzNDA3Mi41MjksInN1YiI6IjY4NWQyMjM4Yjc1MzE5YTEwNjRkMTA3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KZQ8Ov5gcwYl61lgqdwJieCvYc4ffSYy4tZo735wj9I'
        //     }
        // };
        // axios(options)
        //     .then(res => {
        //         if (val == '' && res.data.results.length == 0) {
        //             return setSearchData2(undefined);
        //         }
        //         return setSearchData2(res.data)
        //     })
        //     .catch(err => console.log(err));

        if (val == '') {
            return setSearchData2(undefined);
        }
        const call = async () => {
            const backdata = await axios.post(`http://localhost:5000/route/search/${page2}`, {
                querypath: QueryPath[location.pathname],
                val,
            })
            setSearchData2(backdata.data);
        }
        call();
    }, [location, page2]);

    const debounce = useMemo(() => {
        let timer: ReturnType<typeof setTimeout>;;
        return function (val: string) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                fetchdata(val);
            }, 800)
        }
    }, [fetchdata, page2])


    const SearchQuery = useCallback((val: string) => {
        if (!QueryPath[location.pathname]) {
            return;
        }
        debounce(val)
        setLastQuery(val)
    }, [location, page2])

    useEffect(() => {
        if (lastQuery != undefined) {
            SearchQuery(lastQuery);
        }
    }, [location, lastQuery, page2])

    useEffect(() => {
        setPage2(1);
    }, [location, lastQuery])

    return (
        <div className="MarginSet">
            <div className="MovieTVLayout">
                {
                    value == 'Suggest Me' ? <></> : <h2>MaileHereko</h2>
                }
                <div className="Text">
                    <h1>{value}</h1>
                    {
                        value == 'Suggest Me' ? <h3>I will really appericiate it if you take time to suggest me something good to watch.</h3> : <></>
                    }
                </div>
                <div className="buttonDiv">
                    <Search SearchQuery={SearchQuery}></Search>
                    {
                        value == 'Suggest Me' ? <button>Search</button> : <></>
                    }
                </div>
            </div>
            <Outlet context={{ outlet: { outletSearchData: SearchData2, location, page2, handlePageLeft2, handlePageRight2 } }} />
        </div>
    )
}

export default MovieTVLayout