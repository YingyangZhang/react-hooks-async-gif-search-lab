import React, { useState } from "react";

function GifSearch({onSubmitInput}) {
    const [input, setInput] = useState('');

    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmitInput(input);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter a Search Term:</label>
                <input type='text' value={input} onChange={handleChange}></input>
                <input type='submit' value='Submit' className="button" ></input>
            </form>
        </div>
    )
}

export default GifSearch;