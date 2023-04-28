import React, { useState, useEffect } from "react";
import "./ProductStyle.css";
import { Link } from "react-router-dom";
import {ImPower} from 'react-icons/im'
// import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">Loading......</div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="container-Buttons">
          <button className="Types-buttons cutcorners" onClick={() => setFilter(data)}>
            All-Items
          </button>
          <button
            className="Types-buttons cutcorners"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="Types-buttons cutcorners"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="Types-buttons cutcorners"
            onClick={() => filterProduct("jewelery")}
          >
            Jewellery
          </button>
          <button
            className="Types-buttons cutcorners"
            onClick={() => filterProduct("electronics")}
          >
            Technology
          </button>
        </div>
        {filter.map((Product) => {
          return (
            <div className="col-md-3 mb-4 ">
              <br />
              <div className=" card h-100 text-center p-4 card-section" key={Product.id}>
                <img
                  src={Product.image}
                  className="card-img-top"
                  alt={Product.title}
                  height={"250px"}
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {Product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead fw-bold ">${Product.price}</p>
                  <Link to={`/Products/${Product.id}`} className="btn btn-outline-dark buy-now">
                    <ImPower/>&nbsp;Buy Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <br />
      <div className="container">
        <h2>Latest Products</h2> <hr />
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
