// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../Features/Slice/CartSlice";
import { useDispatch } from "react-redux";

const baseURL = "https://fakestoreapi.com/products";
const AllProducts = () => {
  const [items, setItems] = useState([]);
  const [filterItem, setFilterItem] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchData = async () => {
    // const { data } = await axios.get(baseURL);
    const responce = await fetch(baseURL);
    const result = await responce.json();
    // setItems(result);
    return result;
    // console.log(data);
    // setItem(data);
  };

  useEffect(() => {
    // fetchData();
    fetchData().then((result) => {
      setItems(result);
      setFilterItem(result);
    });
  }, []);

  const filterProduct = (category) => {
    if (category === "allproducts") {
      setFilterItem(items);
    } else {
      const updatedProducts = items.filter(
        (item) => item.category === category
      );
      setFilterItem(updatedProducts);
    }
  };

  const limitTitle = (title, limit = 15) => {
    if (title.length > limit) {
      return title.substring(0, limit) + "...";
    }
    return title;
  };

  return (
    <div className="container-fluid">
      <h1 id="Allpb1">Shop</h1>

      <div
        className="filter-btns"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "5px",
          padding: "10px",
        }}
      >
        <div style={{ padding: "2px" }}>
          <button
            onClick={() => filterProduct("allproducts")}
            style={{
              background: "#87CEEB",
              border: "transparent",
              color: "White",
              borderRadius: "5px",
            }}
          >
            All Product
          </button>
        </div>
        <div style={{ padding: "2px" }}>
          <button
            onClick={() => filterProduct("men's clothing")}
            style={{
              background: "#87CEEB",
              border: "transparent",
              color: "White",
              borderRadius: "5px",
            }}
          >
            Men
          </button>
        </div>
        <div style={{ padding: "2px" }}>
          <button
            onClick={() => filterProduct("women's clothing")}
            style={{
              background: "#87CEEB",
              border: "transparent",
              color: "White",
              borderRadius: "5px",
            }}
          >
            Women
          </button>
        </div>
        <div style={{ padding: "2px" }}>
          <button
            onClick={() => filterProduct("jewelery")}
            style={{
              background: "#87CEEB",
              border: "transparent",
              color: "White",
              borderRadius: "5px",
            }}
          >
            Jewelery
          </button>
        </div>
        <div style={{ padding: "2px" }}>
          <button
            onClick={() => filterProduct("electronics")}
            style={{
              background: "#87CEEB",
              border: "transparent",
              color: "White",
              borderRadius: "5px",
            }}
          >
            Electronics
          </button>
        </div>
      </div>
      <div className="row">
        {filterItem.map((data, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div className="card">
              <img
                src={data.image}
                className="card-img-top"
                style={{ height: "250px", width: "auto" }}
                alt={data.title}
              />
              <div className="card-body" style={{ borderRadius: "50px" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h3
                    style={{
                      color: "#87CEEB",
                    }}
                  >
                    {limitTitle(data.title)}
                  </h3>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <p className="card-text" style={{ color: "green" }}>
                    Price: ${data.price}
                  </p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Rating: {data.rating.rate}*
                    </small>
                  </p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    className="btn btn-success"
                    style={{ margin: "2px" }}
                    onClick={() => {
                      navigate("/page");
                    }}
                  >
                    Buy Now
                  </button>
                  <button
                    className="btn btn-info"
                    style={{ margin: "2px" }}
                    onClick={() => {
                      dispatch(addProduct(data)), navigate("/cart");
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
