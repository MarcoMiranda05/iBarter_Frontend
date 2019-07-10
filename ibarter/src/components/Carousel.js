import React, { Component } from "react";
import Slide from "./carousel_components/Slide";
import LeftArrow from "./carousel_components/LeftArrow";
import RightArrow from "./carousel_components/RightArrow";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      currentIndex: 0,
      translateValue: 0
    };
  }

  componentDidMount() {
    this.startCarousel();
  }

  startCarousel = () => {
    setInterval(() => {
      this.goToNextSlide();
    }, 5000);
  };

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.props.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s"
          }}
        >
          {this.props.images.map((image, i) => (
            <Slide key={i} image={image} />
          ))}
        </div>
        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}

export default Carousel;
