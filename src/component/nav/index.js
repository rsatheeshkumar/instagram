import React from "react";
import { BiSearch, BiUserCircle } from "react-icons/bi";
import { AiFillHome, AiOutlineLike } from "react-icons/ai";

import { Link } from "react-router-dom";

import "./index.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light navigation">
      <div className="container-fluid">
        <div className="d-flex justify-content-between w-100 mt-2">
          <p className="navbar-brand w-25 instagram">Instagram</p>
          <form className="d-flex w-50">
            <input
              className="form-control me-2 w-75 h-75 mx-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success h-75" type="submit">
              <BiSearch color="black" size="25" />
            </button>
          </form>
          <div className="d-flex flex-row justify-content-between w-25 mx-2 my-2">
            <Link to="#" className="">
              <AiFillHome color="black" size="30" />
            </Link>
            <p className="">
              <AiOutlineLike color="black" size="30" />
            </p>
            <Link to="#" className="">
              <BiUserCircle color="black" size="30" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
