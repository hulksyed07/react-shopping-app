import CartItem from "./CartItem"

function Cart({ cartProducts, incrementQuantityInCart, decrementQuantityInCart }) {
    return (
        <>
            <h3>List of Items in Cart</h3>
            {cartProducts.map((cartProduct) => {
                return <CartItem key={cartProduct.id}
                    {...cartProduct}
                    incrementQuantityInCart={incrementQuantityInCart}
                    decrementQuantityInCart={decrementQuantityInCart}/>
            })}
        </>
    )
}

export default Cart
