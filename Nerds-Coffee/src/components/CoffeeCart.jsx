import AddRemoveCoffee from "./AddRemoveCoffee"

function CoffeeCart(props) {
    return (
        <div className="coffeecart">
            <div>
                <h2>{ props.order.title }</h2> 
                <hr /> 
                <p>{ props.order.price } kr</p>
            </div>
            <AddRemoveCoffee coffee={props.order}/>
        </div>
    )
}

export default CoffeeCart