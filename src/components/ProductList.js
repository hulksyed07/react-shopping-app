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

    const removeProductFromCart = (selectedProduct) => {
        let updatedCartProducts = [...cartProducts]
        const indexToRemove = updatedCartProducts.findIndex(product => product.id === selectedProduct.id);

        if (indexToRemove !== -1) {
            updatedCartProducts.splice(indexToRemove, 1);
        }

        setCartProducts(updatedCartProducts)
    }

    const incrementQuantityInCart = (selectedProduct) => {
        let updatedCartProducts = [...cartProducts]
        let cartProduct = updatedCartProducts.find(product => product.id === selectedProduct.id)
        if (!cartProduct){
            return addProductToCart(selectedProduct);
        }

        cartProduct.quantity += 1
        setCartProducts(updatedCartProducts)
    }

    const decrementQuantityInCart = (selectedProduct) => {
        let updatedCartProducts = [...cartProducts]
        let cartProduct = updatedCartProducts.find(product => product.id === selectedProduct.id)
        if (!cartProduct){
            return
        }

        if (cartProduct.quantity == 1){
            return removeProductFromCart(selectedProduct)
        }

        cartProduct.quantity -= 1
        setCartProducts(updatedCartProducts)
    }

    const cartProduct = (selectedProductId) => {
        return cartProducts.find(product => product.id === selectedProductId)
    }

    return (
        <>
            {products.map((product) => {
                return <ProductDetail
                    key={product.id}
                    addProductToCart={addProductToCart}
                    incrementQuantityInCart={incrementQuantityInCart}
                    decrementQuantityInCart={decrementQuantityInCart}
                    cartProduct={cartProduct}
                    {...product} />
            })}
        </>
    )
}

export default ProductList
