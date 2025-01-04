import React, { useEffect, useState } from "react";
import { fetchiServerProducts } from "../utils/serverResources";
import "../css/productsStyle.css";
import Pagination from "../components/Pagination";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const getProductData = async () => {
    try {
      const data = await fetchiServerProducts();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <h1>Products</h1>
      <div className="products">
        {Array.isArray(currentProducts) &&
          currentProducts.map((prod) => (
            <div className="products_single" key={prod.id}>
              <span className="products_title">{prod.title}</span>
              <br />
              <img className="products_img" src={prod.images} alt="products" />
              <p className="products_desc">{prod.description}</p>
            </div>
          ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPage={Math.ceil(products.length / itemsPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductsPage;
