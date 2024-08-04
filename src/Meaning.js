import React from "react";
import Synonyms from "./Synonyms";



export default function Meaning(props) {
    return (
      <div className="meanings">
        <div className="part-Speech">
            {props.meaning.partOfSpeech}
          </div>
          <br />
            <div className="definitions">
            <span className="definition">{props.meaning.definitions[0].definition}</span> 
             

             <div className="example text-center">
             <br />
             <span className="ex" >{props.meaning.definitions[0].example}</span>
             </div>
             </div>
              <div className="definition-two">
                {props.meaning.definitions.definition}
                <div className="example">
                {props.meaning.definitions.example}
                 </div>
                </div>
                <br />
                <div className="synonyms">
                  <span className="title">Synonyms:</span> 
                  
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
