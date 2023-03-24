import { addCoffee } from './addCoffee';
import { useDispatch } from 'react-redux';

function CoffeeCard() {
 const dispatch = useDispatch();

 function handleClick() {
     dispatch(addCoffee('kaffenamn och pris ska in här'))
 }

 return (
    <button onClick={ handleClick }>lägg till kaffe</button>
 )
}

export default CoffeeCard