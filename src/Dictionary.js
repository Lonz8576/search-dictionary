import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data);
    }

    function search(event) {
        event.preventDefault();
        

        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
     
    function handleKeyword(event) {
        setKeyword(event.target.value);

    }


    return (
    <div className="dictionary">
        <form onSubmit={search} className="text-center m-3">
        <input type="search" autoFocus={true} placeholder="What would you like defined?" id="search-input" onChange={handleKeyword} className="search-input p-2"/>
        <button type="submit" className="btn py-2 px-3 ">Search</button>
        </form>
        <Results results={results} />
    </div>
    );
}
