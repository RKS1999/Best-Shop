import React from "react";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoEnter } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div>
        <div id="DownBanner1">
          <h1>We are Expanding to serve you better!</h1>
        </div>
        <div>
          <h3 id="DownText">
            Orders placed by 4pm PST will be shipped the next business day
          </h3>
          <h5 id="DownText">
            Same-day service is also available if ordered by 12pm PST
          </h5>
        </div>
        <div id="DownBanner2">
          <br />
          <div
            className="mb-3 input-group"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="email"
              style={{ width: "250px" }}
              name="email"
              placeholder="Contact Now!"
              aria-describedby="emailHelp"
              required
            />
            <button
              style={{
                background: "transparent",
                border: "transparent",
                color: "#87CEEB",
                fontSize: "25px",
              }}
            >
              <IoEnter />
            </button>
          </div>
        </div>
      </div>
      <div
        className="row g-0 text-center"
        style={{ margin: "10px", padding: "15px" }}
      >
        <div className="col-3 col-md-3">
          <div>
            <img
              src="/best-shop-logo.png"
              style={{ height: "200px", borderRadious: "50px" }}
              alt=""
            />
          </div>
          <div style={{ margin: "10px", fontSize: "30px" }}>
            <Link
              to="https://www.linkedin.com/in/roshan-kr-singh0905?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              style={{ color: "#0077B5", padding: "5px" }}
            >
              <FaLinkedin />
            </Link>
            <Link
              to="https://wa.me/qr/IGKGILKADE5JH1"
              style={{ color: "#25D366", padding: "5px" }}
            >
              <IoLogoWhatsapp />
            </Link>
            <Link
              to="https://www.facebook.com/profile.php?id=100017131605920"
              style={{ color: "#0077B5", padding: "5px" }}
            >
              <FaFacebook />
            </Link>
          </div>
        </div>
        <div className="col-3 col-md-3">
          <h3 style={{ color: "green" }}>Menu</h3>
          <br />
          <span>
            <Link to="" style={{ textDecoration: "none", color: "#87CEEB" }}>
              Home
            </Link>
          </span>
          <br />
          <span>
            <Link
              to="allproducts"
              style={{ textDecoration: "none", color: "#87CEEB" }}
            >
              Shop
            </Link>
          </span>
        </div>
        <div className="col-3 col-md-3">
          <div className="container text-center">
            <div className="row">
              <div className="col" style={{ display: "flex" }}>
                <div>
                  <img
                    src="https://st4.depositphotos.com/4678277/40811/i/450/depositphotos_408110334-stock-photo-full-length-body-size-view.jpg"
                    alt=""
                    style={{ padding: "2px", height: "150px", width: "150px" }}
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.create.vista.com/api/media/small/464163046/stock-photo-cheerful-happy-teen-asian-woman-enjoying-shopping-she-carrying-shopping"
                    alt=""
                    style={{ padding: "2px", height: "150px", width: "150px" }}
                  />
                </div>
              </div>
              <div className="col" style={{ display: "flex" }}>
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdIgKihpzJcI6htq6FlIzON-Sn35gfU3OPyVxjI4ydWFznzdlbacV59bHR2Vj1aJK2Osw&usqp=CAU"
                    alt=""
                    style={{ padding: "2px", height: "150px", width: "150px" }}
                  />
                </div>
                <div>
                  <img
                    src="https://img.etimg.com/thumb/msid-54752786,width-480,height-360,imgsize-80020,resizemode-75/1-how-many-times-do-you-shop.jpg"
                    alt=""
                    style={{ padding: "2px", height: "150px", width: "150px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 col-md-3">
          <h3 style={{ color: "green" }}>Get Connected!</h3>
          <br />
          <div>
            <span style={{ color: "#0077B5", padding: "5px" }}>
              info@bestshop.com
            </span>
            <br />
            <span style={{ color: "#0077B5", padding: "5px" }}>
              +1(000) 000-0000
            </span>
          </div>
          <br />
          <div className="mb-3 input-group">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="email"
              style={{ width: "250px" }}
              name="email"
              aria-describedby="emailHelp"
              required
            />
            <button
              style={{
                background: "transparent",
                border: "transparent",
                color: "#87CEEB",
                fontSize: "25px",
              }}
            >
              <IoEnter />
            </button>
          </div>
        </div>
      </div>
      <h6 style={{ display: "flex", justifyContent: "center" }}>
        ©2024 All Rights Reserved by{" "}
        <span style={{ color: "#87CEEB", padding: "2px" }}>Best Shop.</span> |
        Powered by{" "}
        <span>
          {" "}
          <Link
            to={"https://wa.me/qr/IGKGILKADE5JH1"}
            style={{ textDecoration: "none", color: "#87CEEB", padding: "2px" }}
          >
            Roshan Kumar Singh
          </Link>
        </span>
      </h6>
    </div>
  );
};

export default Footer;
