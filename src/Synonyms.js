import React from "react";

export default function Synonyms(props) {
    if (props.synonyms) {
         return (
            <div className="synonym-box my-1">
            <ul className="Synonyms align-middle">
                <div className="synTitle">Synonyms:</div>
              {props.synonyms.map(function(synonym, index) {
                return ( 
                    <li key={index}>{synonym}</li>
                        
                )      
                })}
                </ul>
                </div>
        );
    } else {
         return null;
    }
   }

