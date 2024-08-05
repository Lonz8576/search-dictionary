import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import logo from "./owlknow.png";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";


export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultInputWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data);
    }

    function imgResponse(response) {
        setPhotos(response.data.photos);
        console.log(response.data);
    }

    function search() {
        const apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);


        const pexelsKey ="9NkW6fIdNnqMYsN5EQOHXoxKIQHRnBHbN9VuRlANvFDaSMqVfCScoXh2";
        let header = { Authorization : `${pexelsKey}`};

        const pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&orientation=landscape&per_page=1&page=1`;

        axios.get(pexelsUrl, { headers: header }).then(imgResponse);
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
        <Photos photos={photos} />
    </div>
    );
} else {
    load();
    return "loading";
}
}
