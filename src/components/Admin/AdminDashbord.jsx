import React, { useEffect, useState } from "react";
import { Input } from "antd";
import "./AdminDashboard.css";
import Product from "./Product";
import TableProduct from "./TableProduct";
import { useNavigate } from "react-router-dom";
import { geAlltotalProduct } from "../../api/product";

const AdminDashbord = () => {
  const [menu, setMenu] = useState("products");
  const [openProduct, setOpenProduct] = useState(false);
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const handleModel = (value) => {
    setOpenProduct(value);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };
  useEffect(() => {
    if (!localStorage?.accessToken) {
      navigate("/");
    }
  }, [localStorage?.accessToken]);

  const getTable = async () => {
    try {
      const result = await geAlltotalProduct();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const init = async () => {
      await getTable();
    };
    init();
  }, []);

  return (
    <>
      <div className="main-container">
        {/* Dashboard */}
        <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
          {/* Vertical Navbar */}
          <nav
            className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
            id="navbarVertical"
          >
            <div className="container-fluid">
              {/* Toggler */}
              <button
                className="navbar-toggler ms-n2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sidebarCollapse"
                aria-controls="sidebarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              {/* Brand */}
              <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-5 me-0" href="/">
                <img
                  src="/img/vip_logo.png"
                  alt="..."
                  style={{ width: "130px", height: "80px" }}
                />
              </a>
              {/* User menu (mobile) */}
              <div className="navbar-user d-lg-none">
                {/* Dropdown */}
                <div clas1sName="dropdown">
                  {/* Toggle */}
                  <a
                    href="#"
                    id="sidebarAvatar"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div className="avatar-parent-child">
                      <img
                        alt="Image Placeholder"
                        src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                        className="avatar avatar- rounded-circle"
                      />
                      <span className="avatar-child avatar-badge bg-success" />
                    </div>
                  </a>
                  {/* Menu */}
                  <div
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="sidebarAvatar"
                  >
                    <a href="#" className="dropdown-item">
                      Profile
                    </a>
                    <a href="#" className="dropdown-item">
                      Settings
                    </a>
                    <a href="#" className="dropdown-item">
                      Billing
                    </a>
                    <hr className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      Logout
                    </a>
                  </div>
                </div>
              </div>
              {/* Collapse */}
              <div className="collapse navbar-collapse" id="sidebarCollapse">
                {/* Navigation */}
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className={
                        "nav-link " + (menu === "products" ? "active" : "")
                      }
                      href="#"
                      onClick={() => setMenu("products")}
                    >
                      <i class="bi bi-box-seam"></i> Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={
                        "nav-link " + (menu === "categories" ? "active" : "")
                      }
                      href="#"
                      onClick={() => setMenu("categories")}
                    >
                      <i class="bi bi-diagram-3"></i> Categories
                    </a>
                  </li>
                </ul>
                {/* Divider */}
                <hr className="navbar-divider my-5 opacity-20" />
                {/* Navigation */}
                {/* Push content down */}
                <div className="mt-auto" />
                {/* User (md) */}
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={handleLogout}>
                      <i className="bi bi-box-arrow-left" /> Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* Main content */}
          <div className="h-screen flex-grow-1 overflow-y-lg-auto ">
            {/* Header */}
            <header className="bg-surface-primary border-bottom pt-6 pb-6">
              <div className="container-fluid">
                <div className="mb-npx">
                  <div className="row align-items-center">
                    <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                      {/* Title */}
                      <h1
                        className="h2 mb-0 ls-tight"
                        style={{ marginTop: "2px", marginLeft: "-280px" }}
                      >
                        {/* {menu === "products" ? "Products" : "Categories"} */}
                        Admin Dashboard
                      </h1>
                    </div>
                    {/* Actions */}
                    <div className="col-sm-6 col-12 text-sm-end">
                      <div className="mx-n1">
                        <a
                          href="#"
                          onClick={() => setOpenProduct(!openProduct)}
                          className="btn d-inline-flex btn-sm btn-primary mx-1"
                        >
                          <span className=" pe-2">
                            <i className="bi bi-plus" />
                          </span>
                          <span>Create</span>
                        </a>
                      </div>
                      {openProduct && (
                        <Product open={openProduct} handleModel={handleModel} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {/* Main */}
            <main className="py-6 bg-surface-secondary">
              <div className="container-fluid">
                {/* Card stats */}
                <div className="row g-6 mb-6">
                  <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                              Total Products
                            </span>
                            <span className="h3 font-bold mb-0">
                              {data.data}
                            </span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                              <i class="bi bi-box-seam"></i>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                          <span className="badge badge-pill bg-soft-success text-success me-2">
                            <i className="bi bi-arrow-up me-1" />
                            13%
                          </span>
                          <span className="text-nowrap text-xs text-muted">
                            Since last month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                              Total Categories
                            </span>
                            <span className="h3 font-bold mb-0">215</span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                              <i class="bi bi-diagram-3"></i>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                          <span className="badge badge-pill bg-soft-success text-success me-2">
                            <i className="bi bi-arrow-up me-1" />
                            30%
                          </span>
                          <span className="text-nowrap text-xs text-muted">
                            Since last month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="card shadow border-0 mb-7">
                  <div className="card-header">
                    <h5 className="mb-0">
                      {menu === "products" ? "Products" : "Categories"}
                    </h5>
                  </div>
                  <div className="table-responsive">
                    {menu == "products" && <TableProduct />}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashbord;
