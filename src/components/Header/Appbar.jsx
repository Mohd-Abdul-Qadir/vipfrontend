import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Dropdown, Input, message, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./Appbar.css";
import { adminLogin } from "../../api/product";
import { style } from "@mui/system";
import * as Product from "../../api/product";

const Appbar = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({ key: "" });
  const [search, setSearch] = useState(false);
  const [login, setLogin] = useState(false);
  const [menu, setMenu] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [prductCategory, setProductCategory] = useState({
    key: "Golden",
  });
  const [silverCategory, setSilverCategory] = useState({
    key: "Silver",
  });
  const [colorCategory, setColorCategory] = useState({
    key: "Color",
  });
  const [kitchenCategory, setKitchenCategory] = useState({
    key: "Kitchen",
  });
  const [aluminum, setAluminum] = useState({
    key: "Aluminum",
  });

  const handleSearch = async () => {
    console.log(navigate(`/search/${state.key.toUpperCase()}`));
  };

  const items = [
    {
      label: (
        // <Link to={`/category/${prductCategory.key}`} className="logo">
        //   Golden Cutlery
        // </Link>
        <a
          style={{ fontSize: "20px", margin: "10px" }}
          href={`/category/${prductCategory.key}`}
        >
          Golden Cutlery{" "}
        </a>
      ),
      key: "0",
    },
    {
      label: (
        // <Link to={`/category/${silverCategory.key}`} className="logo">
        //   Silver Cutlery
        // </Link>

        <a
          style={{ fontSize: "20px", margin: "10px" }}
          href={`/category/${silverCategory.key}`}
        >
          Silver Cutlery
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a
          style={{ fontSize: "20px", margin: "10px" }}
          rel="noopener noreferrer"
          href={`/category/${colorCategory.key}`}

          // href="https://www.aliyun.com"
        >
          Color Cutlery
        </a>
      ),
      key: "2",
    },
    {
      label: (
        <a
          style={{ fontSize: "20px", margin: "10px" }}
          rel="noopener noreferrer"
          href={`/category/${kitchenCategory.key}`}
        >
          Kitchen Tool
        </a>
      ),
      key: "4",
    },
    {
      label: (
        <a
          style={{ fontSize: "20px", margin: "10px" }}
          rel="noopener noreferrer"
          href={`/category/${aluminum.key}`}
        >
          Aluminum Item
        </a>
      ),
      key: "5",
    },

    {
      label: (
        <a style={{ fontSize: "20px", margin: "10px" }} href="/all-product">
          All item
        </a>
      ),
      key: "6",
    },
  ];

  const searchRef = useRef();
  const loginRef = useRef();
  const menuRef = useRef();
  const wrapperRef = useRef();
  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    searchRef.current = search;
    loginRef.current = login;
    menuRef.current = menu;
  }, [search, login, menu]);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        (searchRef.current || loginRef.current || menuRef.current) &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setSearch(false);
        setLogin(false);
        setMenu(false);
      }
    }
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleSubmit = async () => {
    if (userDetail.email.length > 0 && userDetail.password.length > 0) {
      const response = await adminLogin(userDetail);
      if (response.status === 200) {
        localStorage.accessToken = response.data.token;
        navigate("/admin");
        return;
      }
      if (response.status === 401) {
        // message.error("Unauthorized user");
      }

      // console.log(response, "responsee admin");
    } else {
      // message.warn("Enter the email and password");
    }
  };

  return (
    <div className="main-header">
      <Link to="/" className="logo">
        <img src="/img/vip_logo.png" alt="" />
      </Link>

      <div className="header only-desktop">
        <Link to="/" className="link">
          Home
        </Link>

        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space className="link">Product</Space>
          </a>
        </Dropdown>

        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/contact" spy={true} smooth={true} className="link">
          Contact Us
        </Link>
      </div>
      <div className="icons">
        <BiSearch
          className="icon"
          onClick={() => {
            setSearch(!search);
            setLogin(false);
            setMenu(false);
          }}
        />
        <BsPersonFill
          className="icon"
          onClick={() => {
            setLogin(!login);
            setSearch(false);
            setMenu(false);
          }}
        />
        <GiHamburgerMenu
          className="icon"
          id="menu"
          onClick={() => {
            setMenu(!menu);
            setLogin(false);
            setSearch(false);
          }}
        />
        <div ref={wrapperRef}>
          {search ? (
            <form className="search-form">
              <Input
                placeholder="Search here..."
                bordered={false}
                onKeyPress={(event) =>
                  event.key === "Enter" ? handleSearch() : null
                }
                onChange={(e) => setState({ key: e.target.value })}
                id="chatInput"
              />
              <label form="search-box">
                <BiSearch onClick={handleSearch} />
              </label>
            </form>
          ) : null}
          {login ? (
            <div className="login-form">
              <h3>login</h3>
              <Input
                type="email"
                placeholder="your email"
                className="login-box"
                onChange={(e) => {
                  setUserDetail({ ...userDetail, email: e.target.value });
                }}
              />
              <Input
                type="password"
                placeholder="your password"
                className="login-box"
                onChange={(e) => {
                  setUserDetail({ ...userDetail, password: e.target.value });
                }}
              />
              <p>only for admin</p>
              <button className="btn-unique" onClick={() => handleSubmit()}>
                Login Now
              </button>
            </div>
          ) : null}

          {menu ? (
            <div className="header">
              <Link to="/" className="link">
                Home
              </Link>
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="link">Product</Space>
                </a>
              </Dropdown>
              <Link to="/about" className="link">
                About
              </Link>
              <Link to="/contact" className="link">
                Contact Us
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Appbar;
