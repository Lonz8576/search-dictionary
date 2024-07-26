import React, { useState } from "react";
import "./index.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function search(event) {
        event.preventDefault();
        alert(`Search for ${keyword}`);
    }
     
    function handleKeyword(event) {
        setKeyword(event.target.value);

    }


    return (
    <div className="dictionary">
        <form onSubmit={search}className="text-center">
        <input type="text" autoFocus={true} placeholder="What would you like defined?" id="search-input" onChange={handleKeyword} className="search-input p-2"/>
        <button type="submit" class="btn btn-outline-dark py-2 ">Search</button>
        </form>
    </div>
    );
}
