import { useCallback, useEffect, useMemo, useState } from "react"
import All from '../All/All'
import Movies from '../Movies/Movies'
import TV from '../TV/TV'
import { Button } from "../../Components/Button/Button"
import './style.css'
import Search from "../../Components/Search/Search"
import axios from "axios"

const Home = () => {

    const [activeTab, setActiveTab] = useState(1);


    const [searchData, setSearchData] = useState(undefined);

    const [lastQuery, setLastQuery] = useState<string | undefined>(undefined);

    const [page, setPage] = useState(1);

    const tabQuery: Record<number, string> = {
        1: 'multi',
        2: 'movie',
        3: 'tv',
    }

    const handlePageLeft = useCallback(() => {
        setPage((prev) => prev - 1);
    }, [page])
    const handlePageRight = useCallback(() => {
        setPage((prev) => prev + 1);
    }, [page])

    const fetchdata = useCallback((val: string) => {
        // const options = {
        //     method: 'GET',
        //     url: `https://api.themoviedb.org/3/search/${tabQuery[activeTab]}?query=${val}&include_adult=false&language=en-US&page=${page}`,
        //     headers: {
        //         accept: 'application/json',
        //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGZmYWRmZmM2Y2ViNThjODNkYjBhZGU2MTYzYWZkZiIsIm5iZiI6MTc1MDkzNDA3Mi41MjksInN1YiI6IjY4NWQyMjM4Yjc1MzE5YTEwNjRkMTA3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KZQ8Ov5gcwYl61lgqdwJieCvYc4ffSYy4tZo735wj9I'
        //     }
        // };
        if (val == '') {
            setSearchData(undefined);
        }
        // if (val != '') {
        //     axios(options)
        //         .then(res => {
        //             if (val == '' && res.data.results.length == 0) {
        //                 return setSearchData(undefined);
        //             }
        //             return setSearchData(res.data)
        //         })
        //         .catch(err => console.log(err));
        // }
        const call = async () => {
            const backdata = await axios.post(`http://localhost:5000/route/search/${page}`, {
                querypath: tabQuery[activeTab],
                val,
            })
            setSearchData(backdata.data);
        }
        call();
    }, [activeTab, page])

    const call = useMemo(() => {
        let timer: ReturnType<typeof setTimeout>;
        return function (val: string) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                fetchdata(val);
            }, 800);
        }
    }, [fetchdata, page])

    const SearchQuery = useCallback((val: string) => {
        call(val);
        if (val == '') {
            setLastQuery(undefined);
        }
        else {
            setLastQuery(val);
        }
    }, [activeTab, page])

    useEffect(() => {
        if (lastQuery) {
            SearchQuery(lastQuery);
        }
    }, [activeTab, lastQuery, page])

    useEffect(() => {
        setPage(1);
    }, [activeTab, lastQuery])

    return (
        <div className="HomeStyle">
            <div className="HomeIntro">
                <h1>MaileHereko</h1>
                <h2>List of movies and TV Shows, I, Pramod Poudel have watched till date. Explore what I have watched and also feel free to make a suggestion. 😉</h2>
            </div>
            <Search SearchQuery={SearchQuery}></Search>
            <div className="HomeTab">
                <Button id={1} onTabChange={(key) => setActiveTab(key)} activeTab={activeTab} >All</Button>
                <Button id={2} onTabChange={(key) => setActiveTab(key)} activeTab={activeTab}>Movies</Button>
                <Button id={3} onTabChange={(key) => setActiveTab(key)} activeTab={activeTab}>TV</Button>
            </div>
            {activeTab === 1 ? (
                <All
                    searchData={searchData}
                    page={page}
                    handlePageLeft={handlePageLeft}
                    handlePageRight={handlePageRight}
                />
            ) : activeTab === 2 ? (
                <Movies
                    searchData={searchData}
                    page={page}
                    handlePageLeft={handlePageLeft}
                    handlePageRight={handlePageRight}
                />
            ) : (
                <TV
                    searchData={searchData}
                    page={page}
                    handlePageLeft={handlePageLeft}
                    handlePageRight={handlePageRight}
                />
            )}
        </div>
    )
}

export default Home;