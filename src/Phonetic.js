import React from "react";

export default function Phonetic(props) {
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank">
                Listen
            </a>
            <div className="spelling">
                {props.phonetic.text}
            </div>

        </div>
    );
}
