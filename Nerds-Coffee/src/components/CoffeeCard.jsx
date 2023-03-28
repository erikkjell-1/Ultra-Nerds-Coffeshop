import './CoffeeCard.css'

import { addCoffee, updateCoffeeAmount } from './addCoffee';
import { useDispatch, useSelector } from 'react-redux';

function CoffeeCard(props) {
 const dispatch = useDispatch();
 const cartArray = useSelector((state) => { return state.order })
 const currentCoffee = {
    title: props.coffee.title,
    desc: props.coffee.desc,
    price: props.coffee.price,
    id: props.coffee.id,
    quantity: 1
 }

 function handleClick() {
    const isCoffeeAdded = cartArray.find((coffee) => coffee.title === currentCoffee.title)

    if (isCoffeeAdded) {
        dispatch(updateCoffeeAmount(currentCoffee))            
    }
    else {
        dispatch(addCoffee(currentCoffee))
    }
    
 }

 return (
    <article className='coffeecard'>
        <button onClick={ handleClick } className='coffeecard__button'>+</button>
        <div className='coffeecard__text'>
            <h2 className='coffeecard__title'>{ props.coffee.title }</h2>
            <p className='coffeecard__desc'>{ props.coffee.desc }</p>
        </div>
        <p className='coffeecard__price'>{ props.coffee.price } kr</p>
    </article>
 )
}

export default CoffeeCard