import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";



export default function dataResult
(props) {
    if (props.results) {
    return (
    
        <div className="dataResults">
            <section className="main-word">
                <div className=" row ms-1 ps-1">
                <div className="word-result col">
                {props.results[0].word}
                </div>
                </div>
                {props.results[0].phonetics.map(function(phonetic, listenIndex) {
                    return (
                     <div className="row d-flex">
                     <div className="hear-see col-12" key={listenIndex}>
                            <Phonetic phonetic={phonetic} />
                            </div> </div>
                    )})}
                </section>
              {props.results[0].meanings.map(function(meaning, index){
                return (
                    <section key={index}>
                        <Meaning meaning={meaning} />
                        </section>
                );
              })} 
        </div>
    );
    } else {
        return null;
    }
}

