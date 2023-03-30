import AddRemoveCoffee from "./AddRemoveCoffee"

function CoffeeCart(props) {
    return (
        <div className="coffeecart">
            <div className="coffeecart__div">
                <h2 className="coffeecart__coffee">{ props.order.title }<hr className="coffeecart__hr"/></h2> 
                
                <p>{ props.order.price } kr</p>
            </div>
            <AddRemoveCoffee coffee={props.order}/>
        </div>
    )
}

export default CoffeeCart