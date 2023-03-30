import './NoOrder.css'
import { useNavigate } from "react-router-dom"

function NoOrder() {
    const navigate = useNavigate()
    function handleClick() {
        navigate('/menu')
    }

    return (
        <div className='noorder'>
            <img className='noorder__drone' src="/src/views/img/drone (1).svg" alt="" />
            <h1 className='noorder__heading'>Det finns ingen aktiv order!</h1>
            <button onClick={ handleClick } className='noorder__button'>Tillbaka till menyn</button>
        </div>
    )
}

export default NoOrder