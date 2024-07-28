import React from "react";
import Meaning from "./Meaning";



export default function Results(props) {
    if (props.results) {
    return (
    
        <div className="Results">
            <div className="main-word">
                {props.results[0].word}
                </div>
              {props.results[0].meanings.map(function(meaning, index){
                return (
                    <div key={index}>
                        <Meaning meaning={meaning} />
                      
                        </div>
                );
              }
              )} 
            

        </div>
    );
    } else {
        return null;
    }
}

