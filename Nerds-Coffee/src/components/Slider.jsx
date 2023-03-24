function toggleOverlay() {
    overlay.classList.toggle("show");
}

 function Slider() {
    return(
        <div className="slider" id="slider">
            <button className="closebtn" onClick= { toggleOverlay } />
            <h1>Meny</h1>
            <hr />
            <h1>Vårt Kaffe</h1>
            <hr />
            <h1>Orderstatus</h1>
        </div>
    )
  }

  export default Slider;