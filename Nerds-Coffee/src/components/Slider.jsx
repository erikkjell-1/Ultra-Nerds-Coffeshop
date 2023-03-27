import { Link } from "react-router-dom";

function closeOverlay() {
    document.getElementById("slider").style.display = "none";
}

function Slider() {
    return(
        <div className="slider" id="slider">
            <button  className='close__slider' onClick= { closeOverlay } />
            <Link to='/menu' className='slider__text'>Meny</Link>
            <hr />
            <Link to='/ourcoffee' className='slider__text'>Vårt Kaffe</Link>
            <hr />
            <Link to='/order' className='slider__text'>Orderstatus</Link>
        </div>
    )
  }

  export default Slider;