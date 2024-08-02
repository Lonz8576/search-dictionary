import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import logo from "./owlknow.png";
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
        <section className="search-area">
       <div className="hint">Find synonyms, definitions, antonyms, and related words</div>
        <form onSubmit={search} className="input-group text-center mt-3">
        <input type="search" placeholder="learn it, know it!" onChange={handleKeyword} className="form-control p-2" aria-label="word-search"/>
        <button class="btn btn-search" type="submit"><i class="bi bi-search-heart heart"></i></button>

        </form>
        <div className="text-center"id="logo" ><img src={logo} className='logo' alt='logo' width={100}/></div>
               
        </section>
        <Results results={results} />
       
    </div>
    );
}
