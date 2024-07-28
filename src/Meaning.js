import React from "react";


export default function Meaning(props) {
    return (
      <div className="meanings">
        <div className="partOfSpeech">
            {props.meaning.partOfSpeech}
        </div>
        
            {props.meaning.definitions.map(function(definition, index) {
                return (
                  <div key={index} className="definition">
                     {definition.definition}
                    
                   <div className="example">
                    {definition.example}
                   </div>
                   </div>
           
                );
            })}
           
            
            
           
            
      </div>
    );
}
