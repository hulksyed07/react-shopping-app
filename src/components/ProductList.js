import ProductDetail from "./ProductDetail"

function ProductList() {
    const products = [
        { name: "Product 1" },
        { name: "Product 2" },
        { name: "Product 3" },
    ]

    return (
        <>
            {products.map((product) => {
                return <ProductDetail key={product.name} name={product.name} />
            })}
        </>
    )
}

export default ProductList
