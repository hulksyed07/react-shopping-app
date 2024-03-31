function CartItem({ name, price, quantity }){
    return (
        <>
            <p>{name} = {price} x {quantity}</p>
        </>
    )
}

export default CartItem
