function CartItem({ id, name, price, quantity, incrementQuantityInCart, decrementQuantityInCart }){
    const handleIncrementQuantityInCart = () => {
        incrementQuantityInCart({ id, name, price });
    };

    const handleDecrementQuantityInCart = () => {
        decrementQuantityInCart({ id, name, price });
    };

    return (
        <>
            <p>
                <span>{name} Price: {price}</span>
                <button onClick={handleDecrementQuantityInCart}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrementQuantityInCart}>+</button>
            </p>
        </>
    )
}

export default CartItem
