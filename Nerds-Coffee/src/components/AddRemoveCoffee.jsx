import './AddRemoveCoffee.css'
import { useDispatch, useSelector } from 'react-redux';
import { removeCoffee, updateCoffeeAmount } from './addCoffee';


function AddRemoveCoffee(props) {
    const dispatch = useDispatch();
    function handleAddClick() {
        dispatch(updateCoffeeAmount(props.coffee)) 
    }

    function handleRemoveClick() {
        dispatch(removeCoffee(props.coffee))
    }

    return (
        <aside className='addremove'>
            <button onClick={ handleRemoveClick } className='addremove__button'>-</button>
            <p className='addremove__num'>{ props.coffee.quantity }</p>
            <button onClick={ handleAddClick } className='addremove__button'>+</button>
        </aside>
    )
}

export default AddRemoveCoffee