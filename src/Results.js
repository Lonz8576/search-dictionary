import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";



export default function Results(props) {
    if (props.results) {
    return (
    
        <div className="Results">
            <div className="main-word">
                {props.results[0].word}
                {props.results[0].phonetics.map(function(phonetic, index) {
                    return (
                        <div key={index}>
                            <Phonetic phonetic={phonetic} />
                            </div>
                    )
                }
                )}
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

