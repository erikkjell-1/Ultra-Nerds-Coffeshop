import { useSelector } from 'react-redux';
import CoffeeCart from './CoffeeCart';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './CoffeeCart.css'

function ShoppingCart() {

    let totalPrice = 0;
    const orders = useSelector((state) => { return state.order })
    const navigate = useNavigate();

    const orderComponents = orders.map((order) => {
        return <CoffeeCart order={ order } key={ order.id }/>
    })

    orders.forEach((order) => {
        let pricePerSort = order.price * order.quantity
        totalPrice = totalPrice + pricePerSort
    });

    function handleClick() {
        const ordersToSend = orders.map((order) => {
            return {
                name: order.title,
                price: order.price
            }
        })
        if (ordersToSend.length === 0) {
            alert('köp något!')
        }
        else {
            navigate('/order', { state: { ordersToSend: ordersToSend }})
        }
        
    }

    return (
        <section className='dropdown'>
            <svg className='dropdown__triangle'width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 0L27.8564 15H0.143594L14 0Z" fill="#FFFFFF"/>
</svg>

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