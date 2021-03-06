import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
          console.log("Err:", err);
        });
      dispatch(setProducts(response.data));
    };
    fetchProducts();
  }, []);

  console.log("Products:", products);

  return (
    <div className="container section">
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4   g-4">
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;
