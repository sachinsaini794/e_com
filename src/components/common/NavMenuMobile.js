import React, { Fragment, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Logo from "../../assets/images/easyshop.png";
import { Link } from "react-router-dom";
import MegaMenuMobile from "../home/MegaMenuMobile";

const NavMenuMobile = () => {

  const [sideNavState, setSideNavState] = useState("sideNavClose");
  const [contentOverState, setContentOverState] = useState("ContentOverlayClose");

  const MenuBarClickHandler = () => {
    SideNavOpenClose();
  };

  const ContentOverlayClickHandler = () => {
    SideNavOpenClose();
  };

  const SideNavOpenClose = () => {
    // let SideNavState = this.state.SideNavState;
    // let ContentOverState = this.state.ContentOverState;
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
        <Container
          fluid={"true"}
          className="fixed-top shadow-sm p-2 mb-0 bg-white"
        >
          <Row>
            <Col lg={4} md={4} sm={12} xs={12}>
              <Button onClick={MenuBarClickHandler} className="btn">
                <i className="fa fa-bars"></i>
              </Button>

              <Link to="/">
                <img className="nav-logo" src={Logo} alt="" />
              </Link>

              <Button className="cart-btn">
                <i className="fa fa-shopping-cart"></i> 3 Items
              </Button>
            </Col>
          </Row>
        </Container>

        <div className={sideNavState}><MegaMenuMobile /></div>

        <div
          onClick={ContentOverlayClickHandler}
          className={contentOverState}
        ></div>
      </div>
    </Fragment>
  );
};

export default NavMenuMobile;
