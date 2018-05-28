import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  Col,
  CardTitle,
  Button,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import PropTypes from "prop-types";
import { getAboutUsBody, getImage } from "../helpers/Contentful";

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
    cardTitle: "Title",
    cardBody: ["body stuff 1", "body stuff 2"],
    cardImageUrl: ""
  };
  async componentWillMount() {
    const image = await getImage(this.props.cardImageUrl);
    const aboutUs = await getAboutUsBody(this.props.aboutUs);
    await this.setState({
      aboutUs: {
          title: aboutUs.aboutUs,
          body: aboutUs.bodyContentList
      },
      cardBody: this.props.cardBody,
      cardImageUrl: image
    });
  }

  render() {
    return (
      <Col xl="6">
        <Card style={{ backgroundColor: "#222", borderColor: "#333" }} body>
          <CardImg top width="100%" src={this.state.cardImageUrl} />
          <CardBody className="text-white">
            <CardTitle>{this.state.aboutUs.title}</CardTitle>
            <ListGroup>
              {this.state.aboutUs.body.map((content, index) => {
                return (
                  <ListGroupItem
                    active
                    tag="li"
                    action
                    color="secondary"
                    key={index}
                  >
                    {content}
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

AboutUsComponent.propTypes = {};

export default AboutUsComponent;
