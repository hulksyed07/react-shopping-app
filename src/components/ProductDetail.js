function ProductDetail({ id, name, price, currency, addProductToCart, incrementQuantityInCart, decrementQuantityInCart, getCartProduct }) {
    const handleAddToCart = () => {
        addProductToCart({ id, name, price, currency });
    };

    const handleIncrementQuantityInCart = () => {
      incrementQuantityInCart({ id, name, price, currency });
    };

    const handleDecrementQuantityInCart = () => {
      decrementQuantityInCart({ id, name, price, currency });
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
          <p>Price: {price} {currency}</p>
          {cartActionButtons}
        </>
    )
}

export default ProductDetail
