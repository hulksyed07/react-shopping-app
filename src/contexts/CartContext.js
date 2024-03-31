import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addProductToCart = (selectedProduct) => {
    if (cartProducts.some(product => product.id === selectedProduct.id )){
        return incrementQuantityInCart(selectedProduct)
    }

    setCartProducts((currentCartProducts) => {
        return [...currentCartProducts, {...selectedProduct, quantity: 1}]    
    })
  };

  const removeProductFromCart = (selectedProduct) => {
    let updatedCartProducts = [...cartProducts]
    const indexToRemove = updatedCartProducts.findIndex(product => product.id === selectedProduct.id);

    if (indexToRemove !== -1) {
        updatedCartProducts.splice(indexToRemove, 1);
    }

    setCartProducts(updatedCartProducts)
  };

  const incrementQuantityInCart = (selectedProduct) => {
    let updatedCartProducts = [...cartProducts]
    let cartProduct = updatedCartProducts.find(product => product.id === selectedProduct.id)
    if (!cartProduct){
        return addProductToCart(selectedProduct);
    }

    cartProduct.quantity += 1
    setCartProducts(updatedCartProducts)
  };

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
  };

  const getCartProduct = (selectedProductId) => {
    return cartProducts.find(product => product.id === selectedProductId)
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProductToCart,
        removeProductFromCart,
        incrementQuantityInCart,
        decrementQuantityInCart,
        getCartProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
