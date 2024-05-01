import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Header = ({ handleChange }) => {
  return (
    <div className="container-fluid" style={{ borderRadius: "20px" }}>
      <Navbar className="navbar" data-bs-theme="light">
        <div className="container-fluid">
          <NavLink to="" style={{ color: "darkGreen", textDecoration: "none" }}>
            <img src="best-shop-logo.png" style={{ height: "100px" }} alt="" />
          </NavLink>
          <div>
            <h5 style={{ color: "green" }}>Get Connected!</h5>
            <h6 style={{ color: "#87CEEB" }}>+1(000) 000-0000</h6>
          </div>
          <Nav style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ margin: "10px" }}>
              <Link
                to=""
                style={{
                  margin: "10px",
                  color: "#87CEEB",
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
              <Link
                to="allproducts"
                style={{
                  margin: "10px",
                  paddingTop: "10px",
                  color: "#87CEEB",
                  textDecoration: "none",
                }}
              >
                Shop
              </Link>
            </div>
          </Nav>
          <form>
            <label>
              <IoSearch />
            </label>
            <input
              type="text"
              placeholder="           Search Your Products"
              className="nav-input"
              onChange={handleChange}
              style={{
                backgroundColor: "#87CEEB",
                border: "transparent",
                borderRadius: "20px",
                width: "250px",
                margin: "5px",
                padding: "5px",
              }}
            />
          </form>
          <div>
            <Link
              to="cart"
              style={{ fontSize: "25px", margin: "5px", color: "#87CEEB" }}
            >
              <FaCartPlus />
            </Link>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
