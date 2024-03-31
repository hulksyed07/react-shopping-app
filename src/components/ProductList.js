import { useState } from "react"
import ProductDetail from "./ProductDetail"

function ProductList() {
    const products = [
        { id: 1, name: "Baby Diaper", price: "300 INR" },
        { id: 2, name: "Baby Talcom Powder", price: "200 INR" },
        { id: 3, name: "Baby Milk Powder", price: "150 INR" },
    ]

    return (
        <>
            {products.map((product) => {
                return <ProductDetail
                    key={product.id}
                    {...product} />
            })}
        </>
    )
}

export default ProductList
