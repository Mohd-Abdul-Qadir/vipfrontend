import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBNavbarNav,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
} from "mdb-react-ui-kit";
import { product_categories } from "../../db";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);
  const [state, setState] = useState({ key: "" });
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search/${state.key}`);
  };

  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBNavbarBrand href="/">DecorArt</MDBNavbarBrand>
          <MDBCollapse navbar show={showNavNoTogglerThird}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="/">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              {/* <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  About Us
                </MDBNavbarLink>
              </MDBNavbarItem> */}
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="https://api.whatsapp.com/send/?phone=+917668102374"
                >
                  Contact Whatsapp
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=decorartmoradabad@gmail.com"
                >
                  Contact Email
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBDropdown group className="shadow-0">
                  <MDBDropdownToggle>Products</MDBDropdownToggle>
                  <MDBDropdownMenu>
                    {product_categories.map((v, k) => {
                      return (
                        <>
                          <MDBDropdownItem key={k}>
                            <MDBDropdownLink href={`/product-category/${v}`}>
                              {v}
                            </MDBDropdownLink>
                          </MDBDropdownItem>
                        </>
                      );
                    })}
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control"
                placeholder="Search Products"
                onChange={(e) => setState({ key: e.target.value })}
                value={state.key}
                aria-label="Search"
              />
              <MDBBtn color="primary" onClick={handleSearch}>
                Search
              </MDBBtn>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
