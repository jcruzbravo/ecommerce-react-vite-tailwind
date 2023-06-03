import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const [productToShow, setProductToShow] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [order, setOrder] = useState([]);

  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };

  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  const openCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(true);
  };

  const closeCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(false);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        isProductDetailOpen,
        productToShow,
        cartProducts,
        isCheckoutSideMenuOpen,
        order,
        setCount,
        openProductDetail,
        closeProductDetail,
        setProductToShow,
        setCartProducts,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        setOrder
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
