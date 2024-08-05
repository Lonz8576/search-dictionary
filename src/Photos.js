import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
        <section className="Photos">
             <div className="row row-cols-3 img-rows">
            {props.photos.map(function(photo, photoArray) {

                return (
                    <div className="container text-center"  key={photoArray} >
                   
                      <div className="col">
                      <a href={photo.src.original} target="_blank" rel="noreferrer">
                        <img src={photo.src.small} className="api-img" />
                        </a>
                        </div>
                    </div>
                    
                );
            })}
           </div> 
        </section>
    );
  } else {
    return null;
  }
 
}
