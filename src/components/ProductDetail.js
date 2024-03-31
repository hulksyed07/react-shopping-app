function ProductDetail({ id, name, price, addProductToCart }) {
    const handleAddToCart = () => {
        addProductToCart({ id, name, price });
    };

    return (
        <>
          <h3>{name}</h3>
          <p>Price: {price}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </>
    )
}

export default ProductDetail
