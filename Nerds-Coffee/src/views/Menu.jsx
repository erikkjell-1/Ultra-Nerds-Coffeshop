import ShoppingCart from "../components/ShoppingCart";
import CoffeeCard from "../components/CoffeeCard"
import { useState, useEffect } from "react"
import Slider from "../components/Slider";
import './Menu.css'
import { useSelector } from "react-redux";

function Menu() {
  const orders = useSelector((state) => { return state.order })
  const [menu, setMenu] = useState([]);
  const [isShown, setIsShown] = useState(false)


  useEffect(() => {
    const menu_url = 'https://airbean.awesomo.dev/api/beans/';

    async function menuApi() {
    
      const response = await fetch(menu_url);
    
      let data = await response.json();
      setMenu(data.menu)
    }
    menuApi()
  }, []);
   

  const coffeeComponents = menu.map((coffee) => {
    return <CoffeeCard coffee={ coffee } key={ coffee.id }/>
  })

  const handleClick = event => {
    setIsShown(current => !current);
  }

  function toggleOverlay() {
    document.getElementById("slider").style.display = "flex";
}

  return (
    <section className="coffee__menu">
      <aside className="coffee__menu--grid">
    <svg onClick= { toggleOverlay } width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="24" fill="white"/>
<rect x="11" y="14" width="26" height="2" rx="1" fill="#222222"/>
<rect x="11" y="23" width="26" height="2" rx="1" fill="#222222"/>
<rect x="11" y="32" width="26" height="2" rx="1" fill="#222222"/>
</svg>
<button className='cart'onClick={ handleClick }>
<svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0486 4.04876V6.77232H5.95103V4.04876C5.95103 2.91726 6.86829 2 7.99979 2C9.13129 2 10.0486 2.91726 10.0486 4.04876ZM3.95103 4.04876C3.95103 1.81269 5.76373 0 7.99979 0C10.2359 0 12.0486 1.81269 12.0486 4.04876V6.77232V7.42274H13.5427C14.6103 7.42274 15.4896 8.26123 15.5404 9.32761L15.9977 18.9314C16.0521 20.0721 15.1419 21.0266 14 21.0266H1.99997C0.858047 21.0266 -0.0520865 20.0721 0.00222909 18.9314L0.459555 9.32761C0.510335 8.26123 1.38971 7.42274 2.45729 7.42274H3.95103V6.77232V4.04876ZM2.45729 9.42274H13.5427L14 19.0266H1.99997L2.45729 9.42274Z" fill="white"/>
</svg>
<aside className="cart__number">{ orders.length }</aside>
</button>
      
      {isShown && (
        <ShoppingCart/>
      )}
</aside>
      <Slider />

      { coffeeComponents }
    </section>
  )
}
  
  export default Menu