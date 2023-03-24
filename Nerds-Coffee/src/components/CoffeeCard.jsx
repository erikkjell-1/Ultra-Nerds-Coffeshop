import './CoffeeCard.css'

import { addCoffee } from './addCoffee';
import { useDispatch } from 'react-redux';

function CoffeeCard(props) {
 const dispatch = useDispatch();

 function handleClick() {
     dispatch(addCoffee(props.coffee))
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