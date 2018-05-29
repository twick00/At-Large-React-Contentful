import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardBody,
    CardImg,
    Col,
    CardTitle,
    CardSubtitle,
    CardText
} from "reactstrap";

class BeerCard extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        className: "",
        beerName: "beerName",
        beerType: "IPA",
        beerDescription: "beerDescription",
        beerImage: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
    }
    render() {
        return (
            <Col className={this.props.className} xl={this.props.colWidth} style={{ paddingTop: 12 }}>
                {console.log(this.props.beerImage)}
                <Card
                    style={{
                        backgroundColor: "#222",
                        borderColor: "#333",
                        boxShadow: " 5px 11px 35px 7px rgba(0,0,0,0.75)",
                        zIndex: 2
                    }}
                    body
                >
                    <CardImg top width="100%" src={this.props.beerImage} alt="Card image cap" />
                    <CardBody className={"px-0 pb-0"}>
                        <CardTitle className={"text-white"}>{this.props.beerName}</CardTitle>
                        <CardSubtitle className={"text-white-50 mb-1"}>{this.props.beerType}</CardSubtitle>
                        <CardText className={"text-white-50"}>{this.props.beerDescription}</CardText>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}
BeerCard.propTypes = {
    className: PropTypes.string,
    beerName: PropTypes.string,
    beerType: PropTypes.string,
    beerDescription: PropTypes.string,
    beerImage: PropTypes.string
};
export default BeerCard;
