import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const [productToShow, setProductToShow] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [order, setOrder] = useState([]);
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);
  const [searchByTitle, setSearchByTitle] = useState(null);
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const filterItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filterItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filterItemsByTitle(items, searchByTitle);
    }

    if (searchType === "BY_CATEGORY") {
      return filterItemsByCategory(items, searchByCategory);
    }

    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filterItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }

    if (!searchType) {
      return items;
    }

  };

  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchByCategory
        )
      );
    if (searchByTitle && !searchByCategory)
      setFilteredItems(
        filterBy("BY_TITLE", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && !searchByCategory)
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
  }, [items, searchByTitle, searchByCategory]);

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
        items,
        searchByTitle,
        filteredItems,
        searchByCategory,
        setCount,
        openProductDetail,
        closeProductDetail,
        setProductToShow,
        setCartProducts,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        setOrder,
        setItems,
        setSearchByTitle,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
