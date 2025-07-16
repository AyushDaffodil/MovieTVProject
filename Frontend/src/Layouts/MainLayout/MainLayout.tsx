import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import './style.css'
import ScrollToTop from "../../constants/ScrollToTop";

const MainLayout = () => {
    return (
        <div className='containerStyle'>
            <ScrollToTop></ScrollToTop>
            <Navbar></Navbar>
            <Outlet />
        </div>
    )
}

export default MainLayout;