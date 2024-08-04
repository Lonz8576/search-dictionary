import React from "react";
import Synonyms from "./Synonyms";



export default function Meaning(props) {
    return (
      <div className="meanings">
        <div className="part-Speech">
            {props.meaning.partOfSpeech}
          </div>
            <div className="definition">
             {props.meaning.definitions[0].definition}
             <div className="example">
             {props.meaning.definitions[0].example}
             </div>
             </div>
              <div className="definition-two">
                {props.meaning.definitions.definition}
                <div className="example">
                {props.meaning.definitions.example}
                 </div>
                </div>
                <div className="synonyms">
                  {props.meaning.synonyms.map(function (synonym, index) {
                    return (
                    <div key={index}>
                    <Synonyms synonym={synonym} />
                    </div>
                    )
                  }
                  )}
                 
                 
                  </div>                  
      </div>
    );
}
