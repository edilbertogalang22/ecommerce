import { createContext, useContext } from "react";
import useManageProduct from "../hooks/useManageProduct";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const productData = useManageProduct();

  return (
    <ProductContext.Provider value={productData}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);