import React, { Component } from "react";
import { Parallax, Background } from "react-parallax";
import { Navbar, Row, Container } from "reactstrap";
import image from "../resources/images/HeaderImage.jpg";
import logo from "../resources/images/At-Large-Logo.png";
import { getImage } from "../helpers/Contentful";
import { getTaproom } from "../helpers/Contentful";
import NavbarComponent from "../components/NavbarComponent";
import HoursOfOperationComponent from "../components/HoursOfOperationComponent";
import FooterComponent from "../components/FooterComponent";
import AboutUsComponent from "../components/AboutUsComponent";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoUrl: logo,
      backgroundUrl: image
    };
  }

  async componentWillMount() {
    let backgroundUrl = "";
    let logoUrl = "";
    // const now = new Date().getHours();
    const now = 12;
    try {
      logoUrl = await getImage("4d4uxVOVBYOWGEsYEaW48Y");
      backgroundUrl = await getImage(
        now > 4 && now < 19 ? "t3zjHSQtZAIoCgqKM4gyM" : "3qnwrBpABqk6sGoa0gMmoW"
      );
    } catch (e) {
      console.log(e);
      return;
    }
    this.setState({
      logoUrl: logoUrl,
      backgroundUrl: backgroundUrl
    });
  }
  render() {
    return (
      <div style={{ backgroundColor: "#333" }}>
        <Parallax bgImage={this.state.backgroundUrl} strength={200}>
          <div style={{ height: "100vh" }}>
            <div className="at-large-logo" style={this.insideStyles}>
              <img alt="At Large Logo" src={this.state.logoUrl} />
            </div>
          </div>
        </Parallax>
        <NavbarComponent />
        <Container>
          <Row style={{ backgroundColor: "#212529" }}>
              <div style={{textAlign: "center"}} className="col text-center text-white">
                <h1 style={{fontFamily: "Special Elite", paddingTop: "70px", paddingBottom: "200px"}}>At Large Brewery & Taproom</h1>
              </div>
            <HoursOfOperationComponent colWidth={4} resizeValue={"md"} />
          </Row>
        </Container>
        <Container>
          <Row style={{ height: "200vh", backgroundColor: "#212529" }}>
            <div style={{ height: "100%", padding: 0 }} className="col-md-8 col-sm-12">
            {/*<AboutUsComponent aboutUs={"4mXxbCMlQAAeQ68AgIQsqA"} cardImageUrl={"3LkEEeb5d6ckOeKcIYmaqu"}/>*/}
            </div>
            <div
              style={{ height: "100%" }}
              className="col-md-4 d-sm-none d-md-block"
            >
              <div
                style={{ backgroundColor: "#222", height: "100%" }}
                className="col-12"
              />
            </div>
          </Row>
        </Container>

        <FooterComponent />
      </div>
    );
  }
}

// LandingPage.propTypes = {};

export default LandingPage;
