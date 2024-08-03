import React from "react";

export default function Phonetic(props) {
    return (
        <div className="Phonetic">
            <div className="d-flex justify-content-end">
            <div className="phonetic-word col-2">
              {props.phonetic.text}
              </div>
             
            <div className="col-2">
             <div className="hear"><a href={props.phonetic.audio} target="_blank"><i class="bi bi-music-note-list listen"></i>  
            </a></div> 
            </div>

            </div>
        </div>
    );
}

