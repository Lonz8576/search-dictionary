import React from "react";


export default function Results(props) {
    if (props.results) {
    return (
    
        <div className="results">
            <div className="main-word">
                {props.results.word}
                </div>
               
            

        </div>
    );
    } else {
        return null;
    }
}

