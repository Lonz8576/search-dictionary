import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import logo from "./owlknow.png";
import axios from "axios";
import Results from "./Results";


export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data);
    }
    function search(){
        
        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    function handleKeyword(event) {
        setKeyword(event.target.value);
    }
    function load() {
        setLoaded(true);
        search();
    }
    if (loaded) {

    return (
    <div className="dictionary">
        <section className="search-area">
       <div className="hint">Find synonyms, definitions, antonyms, and related words</div>
        <form onSubmit={handleSubmit} className="input-group text-center mt-3">
        <input type="search" placeholder="learn it, know it!" onChange={handleKeyword} className="form-control p-2" aria-label="word-search" defaultValue={props.defaultKeyword} />
        <span class="btn btn-search" type="submit"><i class="bi bi-search-heart heart"></i></span>
        </form>
        <div className="text-center"id="logo" ><img src={logo} className='logo' alt='logo' width={140}/></div>
        </section>
        <Results results={results} />
    </div>
    );
} else {
    load();
    return "loading";
}
}
