import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";



export default function Results(props) {
    if (props.results) {
    return (
    
        <div className="Results">
            <div className="main-word row my-4 text-center justify-content-center">
                <div className="word-result col-3 g-2 align-content-center">
                {props.results[0].word}</div>
                {props.results[0].phonetics.map(function(phonetic, index) {
                    
                    return (
                        <div className="col-3 align-content-center" key={index}>
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

