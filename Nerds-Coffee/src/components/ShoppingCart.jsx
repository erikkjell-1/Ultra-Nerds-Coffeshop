import { useSelector } from 'react-redux';
import CoffeeCart from './CoffeeCart';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ShoppingCart() {

    let totalPrice = 0;
    const orders = useSelector((state) => { return state.order })
    const [test, setTest] = useState([]);
    const navigate = useNavigate();
    console.log(orders);

    const orderComponents = orders.map((order) => {
        return <CoffeeCart order={ order } key={ order.id }/>
    })

    orders.forEach(order => {
        totalPrice = totalPrice + order.price
    });

    function handleClick() {
        const ordersToSend = orders.map((order) => {
            return {
                name: order.title,
                price: order.price
            }
        })
        navigate('/order', { state: { ordersToSend: ordersToSend }})
    }

    return (
        <section>
            <h1>Din beställning</h1>
            { orderComponents }
            <div>
                <h2>Total { totalPrice } kr</h2>
                <p>inkl moms + drönarleverans</p>
            </div>
            <button onClick={ handleClick }>Take my money!</button>
        </section>
    )
}

export default ShoppingCart