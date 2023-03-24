import { useSelector } from 'react-redux';
import CoffeeCart from './CoffeeCart';
import { Link } from 'react-router-dom';

function ShoppingCart() {

    let totalPrice = 0;
    const orders = useSelector((state) => { return state.order })
    console.log(orders);

    const orderComponents = orders.map((order) => {
        return <CoffeeCart order={ order } key={ order.id }/>
    })

    orders.forEach(order => {
        totalPrice = totalPrice + order.price
    });

    return (
        <section>
            <h1>Din beställning</h1>
            { orderComponents }
            <div>
                <h2>Total { totalPrice } kr</h2>
                <p>inkl moms + drönarleverans</p>
            </div>
            <Link to='/order'><button>Take my money!</button></Link>
        </section>
    )
}

export default ShoppingCart