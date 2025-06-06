import React from 'react'

function Carousel() {
  return (
     
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active text-center">
      <h1>SmartBazzar</h1>
      <h1>Master Electronics</h1>
      <p>Good Price and Quallity</p>
      <button>SHOP NOW</button>
    </div>
    <div class="carousel-item text-center " >
      <h1>PrettyFace</h1>
      <h1>Beatiful Expression</h1>
      <p>Good view and beauty</p>
      <button>SHOP NOW</button>
    </div>
    <div class="carousel-item text-center ">
     <h1>WODDEN</h1>
      <h1>LEIBAL PLAIN SOFA</h1>
      <p>Good looking  and comfortable</p>
      <button>SHOP NOW</button>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  
  )
}

export default Carousel
