import './Order.css'
import { useLocation, Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addOrderedCoffee } from "../components/addCoffee";
import Slider from "../components/Slider";

function Order() {
  const navigationState = useLocation();
  const [ordered, setOrdered] = useState({
    orderNr: 'Du har inte beställt något!'
  })
  const dispatch = useDispatch();
  const inOrdered = useSelector((state) => { return state.ordered })

  useEffect(() => {
    if (navigationState.state) {
      async function getOrder() {
        const body = {
            details: {
                order: navigationState.state.ordersToSend
            }
        }
    
    const response = await fetch('https://airbean.awesomo.dev/api/beans/order', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json'
        }
    })
    const data = await response.json();
    setOrdered(data)
    dispatch(addOrderedCoffee(data))
    }
    getOrder()
    }
    else if (inOrdered.eta) {
      async function checkOrder() {
        const response = await fetch(`https://airbean.awesomo.dev/api/beans/order/status/${ inOrdered.orderNr }`)
        const data = await response.json();
        let newOrder = {
          orderNr: inOrdered.orderNr,
          eta: data.eta
        }
        setOrdered(newOrder)
      }
      checkOrder()
    }
    
    
  }, [])
  function toggleOverlay() {
    document.getElementById("slider").style.display = "flex";
}

    return (
      <section className='order'>
        <p className='order__nr--text'>ordernummer <span className='order__nr--nr'>#{ ordered.orderNr }</span></p>
        <img src="/src/views/img/drone.svg" alt="coffeedrone" />
        <h1 className='order__heading'>Din beställning är på väg!</h1>
        <p className='order__eta'>{ ordered.eta } <span className='order__eta--minutes'>minuter</span></p>
        <Link to='/menu' className='order__button'>Ok, cool!</Link>
      </section>
    )
  }
  
  export default Order