import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AiFillStar , AiOutlinePlus} from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { addItemAction } from "./actions/actions";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

 
  const dispatch = useDispatch();
  const addToCart = (product) => {
    // console.log("added to cart")
    dispatch(addItemAction(product));
    navigate("/");
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
            <h5>Loading.....</h5>
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <div className="container product-body">
          <div className="row">
            <div className="col-md-6">
              <img
                src={product.image}
                alt={product.title}
                height="450px"
                width="400px"
              />
            </div>
            <div className="col-md-6 rightside">
              <h4 className="text-uppercase text-white-50">
                {product.category}
              </h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead fw-bolder">
                Rating {product.rating && product.rating.rate} <AiFillStar />
              </p>
              <h3 className="display-6 text-black fw-bold my-4">
                ${product.price}
              </h3>
              <p className="lead ">{product.description}</p>
              <button className="Add-button ms-3" onClick={()=>addToCart(product)}><AiOutlinePlus className="Icons"/>Add to Cart</button>
              <Link to="/Cart">
                <button className="Cart-button ms-3"><BsFillCartPlusFill className="Icons"/>&nbsp;Go to Cart</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Product;
