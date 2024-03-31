function CartItem({ id, name, price, currency, quantity, incrementQuantityInCart, decrementQuantityInCart }){
    const handleIncrementQuantityInCart = () => {
        incrementQuantityInCart({ id, name, price });
    };

    const handleDecrementQuantityInCart = () => {
        decrementQuantityInCart({ id, name, price });
    };

    return (
        <>
            <p>
                <span>{name} Price: {price} {currency}</span>
                <button onClick={handleDecrementQuantityInCart}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrementQuantityInCart}>+</button>
            </p>
        </>
    )
}

export default CartItem
