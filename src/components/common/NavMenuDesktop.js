import React, { Fragment, useState, useEffect } from "react";
import { Container, Navbar, Button, Row, Col } from "react-bootstrap";
import Logo from "../../assets/images/easyshop.png";
import { Link } from 'react-router-dom';
import MegaMenuAll from "../home/MegaMenuAll";
import Bars from "../../assets/images/bars.png";

const NavMenuDesktop = () => {

  const MegaMenu = () => {
    var acc = document.getElementsByClassName("accordionAll");
    var accNum = acc.length;
    var i;
    for (i = 0; i < accNum; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  };

  useEffect(() => {
    MegaMenu();
  }, []);

  const [sideNavState, setSideNavState] = useState("sideNavClose");
  const [contentOverState, setContentOverState] = useState(
    "ContentOverlayClose"
  );

  const MenuBarClickHandler = () => {
    SideNavOpenClose();
  };

  const ContentOverlayClickHandler = () => {
    SideNavOpenClose();
  };

  const SideNavOpenClose = () => {
    if (sideNavState === "sideNavOpen") {
      setSideNavState("sideNavClose");
      setContentOverState("ContentOverlayClose");
    } else {
      setSideNavState("sideNavOpen");
      setContentOverState("ContentOverlayOpen");
    }
  };

  return (
    <Fragment>
      <div className="TopSectionDown">
        <Navbar fixed={"top"} className="navbar" bg="light">
          <Container
            fluid={"true"}
            className="fixed-top shadow-sm p-2 mb-0 bg-white"
          >
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <img
                  onClick={MenuBarClickHandler}
                  className="bar-img"
                  src={Bars}
                  alt=""
                />

                <Link to="/">
                  <img className="nav-logo" src={Logo} alt="" />
                </Link>
              </Col>

              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                <div className="input-group w-100">
                  <input type="text" className="form-control" />
                  <Button type="button" className="btn site-btn">
                    <i className="fa fa-search"> </i>
                  </Button>
                </div>
              </Col>

              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                <Link to="/favourite" className="btn">
                  <i className="fa h4 fa-heart"></i>
                  <sup>
                    <span className="badge text-white bg-danger">3</span>
                  </sup>
                </Link>

                <Link to="/notification" className="btn">
                  <i className="fa h4 fa-bell"></i>
                  <sup>
                    <span className="badge text-white bg-danger">5</span>
                  </sup>
                </Link>
                <a className="btn">
                  <i className="fa h4 fa-mobile-alt"></i>
                </a>
                <Link to="/login" className="h4 btn">
                  LOGIN
                </Link>

                <Button className="cart-btn">
                  <i className="fa fa-shopping-cart"></i> 3 Items
                </Button>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>

      <div className={sideNavState}>
        <MegaMenuAll />
      </div>

      <div
        onClick={ContentOverlayClickHandler}
        className={contentOverState}
      ></div>
    </Fragment>
  );
}

export default NavMenuDesktop;
