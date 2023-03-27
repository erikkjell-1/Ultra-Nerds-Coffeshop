import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addOrderedCoffee } from "../components/addCoffee";
import Slider from "../components/Slider";

function Order() {
  const navigationState = useLocation();
  console.log(navigationState);
  const [ordered, setOrdered] = useState({})
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
        console.log(data);
        let newOrder = {
          orderNr: inOrdered.orderNr,
          eta: data.eta
        }
        setOrdered(newOrder)
      }
      checkOrder()
    }
    else {
      alert('det finns ingen beställning!')
    }
    
    
  }, [])
  function toggleOverlay() {
    document.getElementById("slider").style.display = "flex";
}

    return (
      <section>
        <p>ordernummer { ordered.orderNr }</p>
        <h1>Din beställning är på väg!</h1>
        <p>{ ordered.eta } minuter</p>
        <svg onClick= { toggleOverlay } width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="24" fill="white"/>
<rect x="11" y="14" width="26" height="2" rx="1" fill="#222222"/>
<rect x="11" y="23" width="26" height="2" rx="1" fill="#222222"/>
<rect x="11" y="32" width="26" height="2" rx="1" fill="#222222"/>
</svg>
        <Slider />
      </section>
    )
  }
  
  export default Order