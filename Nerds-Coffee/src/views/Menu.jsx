import ShoppingCart from "../components/ShoppingCart";
import CoffeeCard from "../components/CoffeeCard"
import { useState, useEffect } from "react"

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

  return (
    <section>
      { coffeeComponents }
      <button onClick={ handleClick }>visa cart</button>
      {isShown && (
        <ShoppingCart/>
      )}
    </section>
  )
}
  
  export default Menu