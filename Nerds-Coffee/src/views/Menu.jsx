import ShoppingCart from "../components/ShoppingCart";
import CoffeeCard from "../components/CoffeeCard"
import { useState, useEffect } from "react"
import Slider from "../components/Slider";
import './Menu.css'

function Menu() {

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
    <svg onClick= { toggleOverlay } width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="24" fill="white"/>
<rect x="11" y="14" width="26" height="2" rx="1" fill="#222222"/>
<rect x="11" y="23" width="26" height="2" rx="1" fill="#222222"/>
<rect x="11" y="32" width="26" height="2" rx="1" fill="#222222"/>
</svg>

    
      <Slider />

      { coffeeComponents }
      <button onClick={ handleClick }>visa cart</button>
      
      {isShown && (
        <ShoppingCart/>
      )}
    </section>
  )
}
  
  export default Menu