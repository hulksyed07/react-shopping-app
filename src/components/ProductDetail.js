import useCart from "../hooks/useCart";

function ProductDetail({ id, name, price }) {
    const { addProductToCart, incrementQuantityInCart, decrementQuantityInCart, getCartProduct } = useCart();

    const handleAddToCart = () => {
        addProductToCart({ id, name, price });
    };

    const handleIncrementQuantityInCart = () => {
      incrementQuantityInCart({ id, name, price });
    };

    const handleDecrementQuantityInCart = () => {
      decrementQuantityInCart({ id, name, price });
    };

    let cartActionButtons = <button onClick={handleAddToCart}>Add to Cart</button>

    if (!!getCartProduct(id)){
      cartActionButtons = (
        <>
          <button onClick={handleDecrementQuantityInCart}>-</button>
          <span>{getCartProduct(id).quantity}</span>
          <button onClick={handleIncrementQuantityInCart}>+</button>
        </>
      )
    }

    return (
        <>
          <h3>{name}</h3>
          <p>Price: {price}</p>
          {cartActionButtons}
        </>
    )
}

export default ProductDetail
