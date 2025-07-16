import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import TV from "./Pages/TV/TV";
import IndividualCard from "./Components/IndividualCard/IndividualCard";
import MovieTVLayout from "./Layouts/MovieTVLayout/MovieTVLayout";
import SuggestMe from "./Pages/SuggestMe/SuggestMe";



export const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route element={<MovieTVLayout />}>
                <Route path="/movies" element={<Movies />}></Route>
                <Route path="/tv" element={<TV />}></Route>
                <Route path="/suggestMe" element={<SuggestMe />}></Route>
            </Route>
            <Route path='/:id' element={<IndividualCard />} />
        </Route>
    )
)
