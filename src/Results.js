import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";



export default function Results(props) {
    if (props.results) {
    return (
    
        <div className="Results">
            
            <section className="main-word">
                <div className=" row">
                <div className="word-result col">
                {props.results[0].word}
                </div>
                </div>
                {props.results[0].phonetics.map(function(phonetic, index) {
                    
                    return (
                        <div className="row d-flex">
                        <div className="hear-see col-12" key={index}>
                            <Phonetic phonetic={phonetic} />
                            </div>
                            </div>

                    )
                }
                )}
                
                </section>
              {props.results[0].meanings.map(function(meaning, index){
                return (
                    <section key={index}>
                        <Meaning meaning={meaning} />
                      
                        </section>
                );
              }
              )} 
           

        </div>
    );
    } else {
        return null;
    }
}

