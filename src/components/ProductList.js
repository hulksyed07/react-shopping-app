import { useState } from "react"
import ProductDetail from "./ProductDetail"

function ProductList() {
    const products = [
        { id: 1, name: "Baby Diaper", price: "300 INR" },
        { id: 2, name: "Baby Talcom Powder", price: "200 INR" },
        { id: 3, name: "Baby Milk Powder", price: "150 INR" },
    ]

    const [cartProducts, setCartProducts] = useState([])

    console.log(cartProducts)

    const addProductToCart = (selectedProduct) => {
        if (cartProducts.some(product => product.id === selectedProduct.id )){
            return incrementQuantityInCart(selectedProduct)
        }

        setCartProducts((currentCartProducts) => {
            return [...currentCartProducts, {...selectedProduct, quantity: 1}]    
        })
    }

    const incrementQuantityInCart = (selectedProduct) => {
        var updatedCartProducts = [...cartProducts]
        var cartProduct = updatedCartProducts.find(product => product.id === selectedProduct.id)
        if (!cartProduct){
            return addProductToCart(selectedProduct);
        }

        cartProduct.quantity += 1
        setCartProducts(updatedCartProducts)
    }

    return (
        <>
            {products.map((product) => {
                return <ProductDetail key={product.id} addProductToCart={addProductToCart} {...product} />
            })}
        </>
    )
}

export default ProductList
