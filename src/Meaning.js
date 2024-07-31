import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
    return (
      <div className="meanings">
              
            {props.meaning.definitions.map(function(definition, index) {
                return (
                  <div key={index} className="definition">
                    <div className="defBox container-sm">
                    <div className="partOfSpeech">
                  {props.meaning.partOfSpeech}
                   <br />
                   </div>
                     <span className="title">Definition: </span>
                     {definition.definition}
                     </div>
                     <div className="ex-syn row me-auto justify-content-evenly">
                     <div className="exBox col-3 my-3">
                     <Example example={definition.example} />
                     </div>
                   <div className="synBox col-3 my-3">
                 <Synonyms synonyms={definition.synonyms} />
                 </div>
                 </div>
                   </div>
           
                );
            })}
           
            
            
           
            
      </div>
    );
}
