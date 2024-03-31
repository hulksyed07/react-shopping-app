function ProductDetail({ id, name, price, addProductToCart, incrementQuantityInCart, decrementQuantityInCart, cartProduct }) {
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

    if (!!cartProduct(id)){
      cartActionButtons = (
        <>
          <button onClick={handleIncrementQuantityInCart}>+1</button>
          <button onClick={handleDecrementQuantityInCart}>-1</button>
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
