import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
    return (
      <div className="meanings">
              
            {props.meaning.definitions.map(function(definition, index) {
                return (
                  
                  <div key={index} className="definition">
                
                    <div className="defBox">
                    <div className="part-Speech">
                  {props.meaning.partOfSpeech}
                   <br />
                   </div>
                     <span className="title">Definition: </span>
                     {definition.definition}
                     </div>
                     
                    <section>
                     <div className="exBox">
                     <Example example={definition.example} />
                     
                     </div>
                   <div className="synBox">
                 <Synonyms synonyms={definition.synonyms} />
                 </div>
                 </section>
                 </div>
                   
           
                );
            })}
           
            
            
           
            
      </div>
    );
}
