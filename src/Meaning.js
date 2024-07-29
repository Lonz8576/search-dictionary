import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
      <div className="meanings">
        <div className="partOfSpeech">
            {props.meaning.partOfSpeech}
            <br />
        </div>
        
            {props.meaning.definitions.map(function(definition, index) {
                return (
                  <div key={index} className="definition">
                     <span className="title"> Definition: </span>
                    <br />
                     {definition.definition}
                     <br />
                   <div className="example">
                   <br />
                   <span className="title"> Example: </span>
                    <br />
                    {definition.example}
                   </div>
                   <br />
                 <Synonyms synonyms={definition.synonyms} />
                <hr></hr>
                   </div>
           
                );
            })}
           
            
            
           
            
      </div>
    );
}
