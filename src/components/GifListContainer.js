import React, {useState, useEffect} from "react";
import GifList from './GifList';
import GifSearch from "./GifSearch";

function GifListContainer() {
    const [gifs, setGifs] = useState([]);
    const [vinput, setInput] = useState('dog')

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${vinput}&api_key=CxsonqiXLlKMSOFCSt7ICuI2SvpaP9Yy&rating=g`)
        .then(r => r.json())
        .then(d => setGifs(d.data.slice(0, 3)))
    }, [vinput])

    return (     
        <div className="container">
            <GifSearch onSubmitInput={setInput}/>
            {gifs.map(gif => {
                return <GifList key={gif.id} gif={gif} />
            })}
        </div>
    )
}

export default GifListContainer;