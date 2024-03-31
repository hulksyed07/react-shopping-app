import { useCartContext } from "../contexts/CartContext"
import CartItem from "./CartItem"

function Cart() {
    const { cartProducts } = useCartContext();

    return (
        <>
            <h3>List of Items in Cart</h3>
            {cartProducts.map((cartProduct) => {
                return <CartItem key={cartProduct.id}
                    {...cartProduct} />
            })}
        </>
    )
}

export default Cart
