import React, { Component } from "react";
import { Parallax, Background } from "react-parallax";
import { Nav, Row, Container, Button } from "reactstrap";
import dayImage from "../resources/images/HeaderImage.jpg";
import nightImage from "../resources/images/NightImage.jpg";
import logo from "../resources/images/At-Large-Logo.png";
import { getEntries, getImage, getRandomMobQuote } from "../helpers/Contentful";
import { getTaproom, getOnTap } from "../helpers/Contentful";
import NavbarComponent from "../components/NavbarComponent";
import HoursOfOperationComponent from "../components/HoursOfOperationComponent";
import FooterComponent from "../components/FooterComponent";
import AboutUsComponent from "../components/AboutUsComponent";
import "./pagesCSS/LandingPage.css";
import BeerCard from "../components/BeerCard";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beersArr: [
        {
          beer: "",
          beerDescription: "",
          currentlyOnTap: false,
          beerStyle: "",
          beerPhoto: {}
        }
      ],
      mobsterQuote: {
        mobster: "",
        quote: ""
      },
      logoUrl: logo,
      backgroundUrl: (() => {
        return new Date().getHours() > 4 && new Date().getHours() < 19
          ? dayImage
          : nightImage;
      })(),
      aboutUsArr: [
        {
          aboutUs: "",
          bodyContentList: [""],
          aboutUsImage: {
            fields: {
              file: {
                url: ""
              }
            }
          }
        }
      ]
    };
  }

  async componentWillMount() {
    let backgroundUrl = "";
    let logoUrl = "";
    let aboutUsArr = [""];
    let beersArr = [{}];
    let mobsterQuote = {
      mobster: "~ Al Capone",
      quote:
        "Don’t mistake my kindness for weakness. I am kind to everyone, but when someone is unkind to me, weak is not what you are going to remember about me."
    };
    const now = new Date().getHours();
    try {
      beersArr = await getOnTap(5);
      mobsterQuote = await getRandomMobQuote();
      aboutUsArr = await getEntries("allAboutUs");
      logoUrl = await getImage("4d4uxVOVBYOWGEsYEaW48Y");
      backgroundUrl = await getImage(
        now > 4 && now < 19 ? "t3zjHSQtZAIoCgqKM4gyM" : "3qnwrBpABqk6sGoa0gMmoW"
      );
    } catch (e) {
      console.log(e);
      return;
    }
    this.setState({
      beersArr: beersArr,
      mobsterQuote: mobsterQuote,
      aboutUsArr: aboutUsArr,
      logoUrl: logoUrl,
      backgroundUrl: backgroundUrl
    });
  }
  render() {
    return (
      <div style={{ backgroundColor: "#333" }}>
        <Parallax bgImage={this.state.backgroundUrl} strength={500}>
          <div style={{ height: "100vh" }}>
            <div className="at-large-logo" style={this.insideStyles}>
              <img alt="At Large Logo" src={this.state.logoUrl} />
            </div>
          </div>
        </Parallax>
        <NavbarComponent />
        <Container>
          <Row
            style={{
              backgroundColor: "#212529",
              boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
              zIndex: 1
            }}
          >
            <div
              style={{ textAlign: "center", paddingBottom: 10 }}
              className="col text-center text-white"
            >
              <h1
                className={"mb-5"}
                style={{
                  fontFamily: "Special Elite",
                  paddingTop: "50px",
                  paddingBottom: "5px"
                }}
              >
                At Large Brewery & Taproom
              </h1>
              <div
                style={{
                  transform: "rotate(4deg)",
                  boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)"
                }}
                className={"mx-3 "}
              >
                <h5 style={{ fontFamily: "Courier New" }}>
                  "{this.state.mobsterQuote.quote}"
                </h5>
                <h4 style={{ fontFamily: "Special Elite" }}>
                  ~ {this.state.mobsterQuote.mobster}
                </h4>
              </div>
            </div>
            <HoursOfOperationComponent colWidth={4} resizeValue={"lg"} />
          </Row>
        </Container>
        <Container style={{ marginBottom: 20 }}>
          <Row
            style={{
              backgroundColor: "#212529",
              boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)"
            }}
          >
            <div
              style={{ height: "100%", padding: 0 }}
              className="col-lg-8 col-md-12"
            >
              {this.state.aboutUsArr.map((item, index) => {
                return (
                  <AboutUsComponent
                    key={index}
                    cardTitle={item.aboutUs}
                    cardBody={item.bodyContentList}
                    cardImageUrl={item.aboutUsImage.fields.file.url}
                  />
                );
              })}
            </div>
            <div className="col-lg-4 d-lg-block h-100 p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d12704.023936723468!2d-122.21458979075476!3d47.981011476345685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x549aaca9da68a833%3A0xd4554c5c81adb814!2sAt+Large+Brewing+%26+Taproom%2C+2730+W+Marine+View+Dr%2C+Everett%2C+WA+98201!3m2!1d47.980878399999995!2d-122.21460309999999!5e0!3m2!1sen!2sus!4v1527560535498"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ marginTop: 12, border: 0 }}
                allowFullScreen
                className="px-2"
              />


              {this.state.beersArr.map((beer, index) => {
                return (
                  <BeerCard
                    className={"beers"}
                    key={index}
                    beerName={beer.beerName}
                    beerDescription={beer.beerDescription}
                    beerType={beer.beerStyle}
                    beerImage={beer.beerPhoto}
                  />
                );
              })}
                <Button  outline style={{
                    transform: "rotate(1deg)",
                    boxShadow: "10px 10px 40px 8px rgba(0,0,0,0.75",
                    fontSize: 25,
                    borderRadius: 5,
                }} color="dark" size="lg" block className={"text-center text-white-50 mb-3"}>More Beers</Button>
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
