function CoffeeCart(props) {

    return (
        <div>
            <h2>{ props.order.title }</h2>
            <p>{ props.order.price } kr</p>
        </div>
    )
}

export default CoffeeCart