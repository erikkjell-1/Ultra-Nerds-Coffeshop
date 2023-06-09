import { Link } from "react-router-dom";

function Slider() {

    function closeOverlay() {
        const slider = document.getElementById("slider")
        slider.classList.toggle("slider-show");
    }

    return(
        <div className="slider" id="slider">
            
            <svg className='close__slider' onClick= { closeOverlay }width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="24" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M14.7071 31.2635C14.3166 31.654 14.3166 32.2871 14.7071 32.6777C15.0976 33.0682 15.7308 33.0682 16.1213 32.6777L23.5 25.299L31.2635 33.0624C31.654 33.453 32.2871 33.453 32.6777 33.0624C33.0682 32.6719 33.0682 32.0388 32.6777 31.6482L24.9142 23.8848L33.0919 15.7071C33.4824 15.3166 33.4824 14.6834 33.0919 14.2929C32.7014 13.9024 32.0682 13.9024 31.6777 14.2929L23.5 22.4706L15.7071 14.6777C15.3166 14.2871 14.6834 14.2871 14.2929 14.6777C13.9024 15.0682 13.9024 15.7014 14.2929 16.0919L22.0858 23.8848L14.7071 31.2635Z" fill="#222222"/>
</svg>
<aside>
            <Link to='/menu' className='slider__text' onClick={ closeOverlay }>Meny</Link>
            <hr />
            <Link to='/ourcoffee' className='slider__text' onClick={ closeOverlay }>Vårt Kaffe</Link>
            <hr />
            <Link to='/order' className='slider__text' onClick={ closeOverlay }>Orderstatus</Link>
            <hr />
            </aside>
        </div>
    )
  }

  export default Slider;