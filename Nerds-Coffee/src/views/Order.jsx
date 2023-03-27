import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addOrderedCoffee } from "../components/addCoffee";

function Order() {
  const navigationState = useLocation();
  console.log(navigationState.state.ordersToSend);
  const [ordered, setOrdered] = useState({})
  const dispatch = useDispatch();
  // const orders = useSelector((state) => { return state.ordered })

  useEffect(() => {
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
    console.log(data);
    setOrdered(data)
    dispatch(addOrderedCoffee(data))
    }
    getOrder()
    
}, [])

    return (
      <section>
        <p>ordernummer { ordered.orderNr }</p>
        <h1>Din beställning är på väg!</h1>
        <p>{ ordered.eta } minuter</p>
        
      </section>
    )
  }
  
  export default Order