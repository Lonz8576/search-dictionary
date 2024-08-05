import React from "react";

export default function Phonetic(props) {
    return (
        <div className="Phonetic justify-content-center">
            <div className="d-flex row justify-content-end">
            <div className="phonetic-word col-3">
              {props.phonetic.text}
              <div className="hear-row row py-1">
             <div className="hear justify-content-end"><a href={props.phonetic.audio} target="_blank" rel="noreferrer" ><i class="bi bi-music-note-list listen align-middle"></i>  
            </a>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
}

