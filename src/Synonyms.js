import React from "react";

export default function Synonyms(props) {
    if (props.synonyms) {
         return (
            <div className="synonym-box">
            <ul className="Synonyms align-content-center m-2 py-4">
                <div className="synTitle">Synonyms:</div>
              {props.synonyms.map(function(synonym, index) {
                return ( 
                    
                    <li key={index}> {synonym} </li>
                        
                )      
                })}
                </ul>
                </div>
        );
    } else {
         return null;
    }
   }

