import React, {useState} from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
        <section className="img-array">
            {props.photos.map(function(photo, photoArray){
                return (
                    <div className="container-fluid" key={photoArray}>
                        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" key={photoArray}>
  <div class="carousel-inner">
    <div class="carousel-item active" >
    <img src={photo.src.medium} />
    </div> 
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="prev">
    
    <span class="previous">
        <i class="bi bi-arrow-left-circle-fill left"></i>
    </span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
   
    <span class="next">
    <i class="bi bi-arrow-right-circle-fill right"></i>
    </span>
  </button>
</div>
                    </div>
                );
            })}
            
        </section>
    );
  } else {
    return null;
  }
 
}
