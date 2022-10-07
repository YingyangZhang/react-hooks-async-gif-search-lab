import React from "react";

function GifList({gif}) {
    return (
        <div className="gif-container"><img src={gif.images.original.url} /></div>
    )
}

export default GifList;