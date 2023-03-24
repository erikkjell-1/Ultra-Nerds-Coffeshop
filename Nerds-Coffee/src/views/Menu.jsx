// import menuApi from "../components/Api/Menu"
import CoffeeCard from "../components/CoffeeCard"
import { useState, useEffect } from "react"
import Slider from "../components/Slider";
import './Menu.css'

function Menu() {

  const [menu, setMenu] = useState([]);


  useEffect(() => {
    const menu_url = 'https://airbean.awesomo.dev/api/beans/';

  async function menuApi() {
    
    const response = await fetch(menu_url);
    
    let data = await response.json();
    console.log(data.menu);
    setMenu(data.menu)
}
menuApi()
  }, [])
   

  const coffeeComponents = menu.map((coffee) => {
    return <CoffeeCard coffee={ coffee }/>
  })

  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  return (
    <section>
    <button onClick="window.location.reload()" />
      <Slider />

      { coffeeComponents }

    </section>
  )
}
  
  export default Menu