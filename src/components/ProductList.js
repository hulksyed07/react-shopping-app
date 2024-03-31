import ProductDetail from "./ProductDetail"

function ProductList() {
    const products = [
        { name: "Product 1", price: "300 INR" },
        { name: "Product 2", price: "200 INR" },
        { name: "Product 3", price: "150 INR" },
    ]

    return (
        <>
            {products.map((product) => {
                return <ProductDetail key={product.name} name={product.name} price={product.price} />
            })}
        </>
    )
}

export default ProductList
