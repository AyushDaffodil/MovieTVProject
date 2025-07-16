import './style.css'
import { imagePath } from '../../constants/svgFilepath';
import { Button } from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    function handleLogoClick() {
        navigate('/')
    }

    return (
        <div className='containerStyle2'>
            <img onClick={handleLogoClick} src={imagePath.logo} alt="Logo" />
            <div className='ButtonGroup'>
                <Button path='/movies'>Movies</Button>
                <Button path='/tv'>TV Shows</Button>
                <Button arrow={imagePath.rightArrow} path='/suggestMe'>Suggest Me</Button>
            </div>
        </div>
    )
}

export default Navbar;