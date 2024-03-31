import CartItem from "./CartItem"

function Cart({ cartProducts }) {
    return (
        <>
            <h3>List of Items in Cart</h3>
            {cartProducts.map((cartProduct) => {
                return <CartItem key={cartProduct.id} {...cartProduct}/>
            })}
        </>
    )
}

export default Cart
