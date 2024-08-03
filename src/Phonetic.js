import React from "react";

export default function Phonetic(props) {
    return (
        <div className="Phonetic">
            <div className="d-flex justify-content-end">
            <div className="phonetic-word col-3">
              {props.phonetic.text}
              </div>
             
            <div className="col-2  ps-2">
             <button><a href={props.phonetic.audio} target="_blank"><i class="bi bi-music-note-list listen"></i>  
            </a></button> 
            </div>

            </div>
        </div>
    );
}

