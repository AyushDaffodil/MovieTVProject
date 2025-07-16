import './style.css'
import { imagePath } from '../../constants/svgFilepath';
import { useEffect, useState } from 'react';
import type { searchProps } from './type';


const Search = ({
    SearchQuery = () => { }
}: searchProps) => {

    const [textData, setTextData] = useState(undefined);

    useEffect(() => {
        if (textData) {
            SearchQuery(textData);
        }
        if (textData == '') {
            SearchQuery(textData);
        }
    }, [textData])

    return (
        <div className={textData == '' ? 'search' : 'search ChangeColor'}>
            <img src={imagePath.search} alt="" />
            <input type="text" onChange={(e) => setTextData(e.target.value)} placeholder='Search Movies or TV Shows' value={textData} />
        </div>
    )

}

export default Search;