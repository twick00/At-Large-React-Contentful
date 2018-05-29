import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  Col,
  CardTitle,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import PropTypes from "prop-types";
import { Parallax, Background } from "react-parallax";

class AboutUsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutUs: {
        title: "",
        body: [""]
      },
      cardImageUrl: ""
    };
  }
  static defaultProps = {
    colWidth: 12,
    cardTitle: "",
    cardBody: [""],
    cardImageUrl: ""
  };

  render() {
    return (
      <Col xl={this.props.colWidth} style={{ paddingTop: 12 }}>
        <Card
          style={{
            backgroundColor: "#222",
            borderColor: "#333",
            boxShadow: " 5px 11px 35px 7px rgba(0,0,0,0.75)",
            zIndex: 2
          }}
          body
        >
          <CardBody className="text-white p-0 pt-1">
            <CardTitle style={{ fontFamily: "Special Elite", fontSize: 40 }} className="text-center mb-4">
                {this.props.cardTitle}
            </CardTitle>
            <CardImg top width="100%" src={this.props.cardImageUrl} />
            <ListGroup
              flush
              tag={"ul"}
              style={{ content: "e080", listStyle: "circle" }}
            >
              {this.props.cardBody.map((content, index) => {
                return (
                  <ListGroupItem
                    active
                    tag="li"
                    action
                    color="dark"
                    key={index}
                    className={"px-1"}
                  >
                    <li
                      className={"ml-3 text-white"}
                      style={{  fontFamily: "Courier New" }}
                    >
                      {content}
                    </li>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

AboutUsComponent.propTypes = {
  colWidth: PropTypes.number,
  cardTitle: PropTypes.string,
  cardBody: PropTypes.arrayOf(PropTypes.string),
  cardImageUrl: PropTypes.string
};

export default AboutUsComponent;
