import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const baseURL = "https://fakestoreapi.com/products";
const Home = () => {
  const [items, setItems] = useState([]);
  const [filterItem, setFilterItem] = useState([]);
  const navigate = useNavigate();
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

  const limitTitle = (title, limit = 10) => {
    if (title.length > limit) {
      return title.substring(0, limit) + "...";
    }
    return title;
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h1 id="homeb1">Welcome To Our Best Shop</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid h-100">
        <div className="row d-flex justify-content-center align-items-left h-100">
          <div style={{ paddingTop: "5px" }}>
            <div className="row">
              {/* Accordion Start */}
              <div
                className="col-2"
                style={{
                  border: "1px solid",
                  borderRadius: "10px",
                  height: "auto",
                }}
              >
                <h4 style={{ color: "ash" }}>Categories</h4>
                <div className="mb-3">
                  <div
                    style={{
                      margin: "10px",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "left",
                      alignItems: "left",
                    }}
                  >
                    <div className="filter-btns">
                      <button
                        onClick={() => filterProduct("allproducts")}
                        style={{
                          background: "transparent",
                          border: "transparent",
                          color: "#87CEEB",
                        }}
                      >
                        All Products
                      </button>
                      <br />
                      <button
                        onClick={() => filterProduct("men's clothing")}
                        style={{
                          background: "transparent",
                          border: "transparent",
                          color: "#87CEEB",
                        }}
                      >
                        Men
                      </button>
                      <br />
                      <button
                        onClick={() => filterProduct("women's clothing")}
                        style={{
                          background: "transparent",
                          border: "transparent",
                          color: "#87CEEB",
                        }}
                      >
                        Women
                      </button>
                      <br />
                      <button
                        onClick={() => filterProduct("jewelery")}
                        style={{
                          background: "transparent",
                          border: "transparent",
                          color: "#87CEEB",
                        }}
                      >
                        jewelery
                      </button>
                      <br />
                      <button
                        onClick={() => filterProduct("electronics")}
                        style={{
                          background: "transparent",
                          border: "transparent",
                          color: "#87CEEB",
                        }}
                      >
                        Electronics
                      </button>
                    </div>
                    {/* Add Accordian list here */}
                  </div>
                </div>
              </div>
              {/* Accordion End */}
              <div className="col-10">
                <div className="row" style={{ margin: "10px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "10px",
                    }}
                  >
                    <h2 style={{}}>All Products</h2>
                    &nbsp;&nbsp;&nbsp;
                  </div>

                  {filterItem.map((data, index) => (
                    <div className="col-md-3 mb-3" key={index}>
                      <div className="card">
                        <img
                          src={data.image}
                          className="card-img-top"
                          style={{ height: "250px", width: "auto" }}
                          alt={data.title}
                        />
                        <button
                          className="btn btn-success"
                          style={{
                            margin: "2px",
                            color: "#87CEEB",
                            background: "transparent",
                            border: "transparent",
                          }}
                          onClick={() => {
                            navigate("/allproducts");
                          }}
                        >
                          {limitTitle(data.title)}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
