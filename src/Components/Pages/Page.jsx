import React from "react";
import { MdError } from "react-icons/md";

const Page = () => {
  return (
    <div className="container-fluid">
      <h1 id="ERROR">404 Error</h1>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          color: "red",
          fontSize: "100px",
        }}
      >
        <MdError />
      </h2>
      <h2 style={{ display: "flex", justifyContent: "center", color: "red" }}>
        This Page
      </h2>
      <h5 style={{ display: "flex", justifyContent: "center" }}>
        Comming Soon...
      </h5>
      <br />
      <br />
    </div>
  );
};

export default Page;
