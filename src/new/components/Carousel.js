import React, { Component } from "react";
import MediaQuery from "react-responsive";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

const CarouselData = [
  {
    image: require("../../images/hslide1.png").default,
  },
  {
    image: require("../../images/hslide2.png").default,
  },
  {
    image: require("../../images/hslide3.png").default,
  },
  {
    image: require("../../images/hslide4.png").default,
  },
];

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === CarouselData.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? CarouselData.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
      <div>
        <MediaQuery minWidth={768}>
          <div className="mt-8 flex justify-center p-16">
            <div className=" flex justify-center items-center overflow-hidden relative">
              <AiOutlineLeft
                onClick={this.prevSlide}
                className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
              />

              <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
                {CarouselData.map((slide, index) => {
                  return (
                    <img
                      src={slide.image}
                      alt="This is a carousel slide"
                      key={index}
                      className={
                        index === this.state.currentSlide
                          ? "block w-788px h-688px  "
                          : "hidden"
                      }
                      onMouseEnter={() => {
                        this.setState({ paused: true });
                      }}
                      onMouseLeave={() => {
                        this.setState({ paused: false });
                      }}
                    />
                  );
                })}
              </Swipe>

              <div className="absolute w-full flex justify-center bottom-0  ">
                {CarouselData.map((element, index) => {
                  return (
                    <div>
                      <div
                        className={
                          index === this.state.currentSlide
                            ? "h-1 w-10 bg-aboutOrange rounded-full mx-2   "
                            : "h-1 w-10 bg-white rounded-full mx-2   "
                        }
                        key={index}
                        onClick={() => {
                          this.setCurrentSlide(index);
                        }}
                      ></div>
                    </div>
                  );
                })}
              </div>

              <AiOutlineRight
                onClick={this.nextSlide}
                className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
              />
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <div className="mt-8 flex justify-center p-16">
            <div className=" flex justify-center items-center overflow-hidden relative">
              <AiOutlineLeft
                onClick={this.prevSlide}
                className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
              />

              <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
                {CarouselData.map((slide, index) => {
                  return (
                    <img
                      src={slide.image}
                      alt="This is a carousel slide"
                      key={index}
                      className={
                        index === this.state.currentSlide
                          ? "block w-384px h-234px    "
                          : "hidden"
                      }
                      onMouseEnter={() => {
                        this.setState({ paused: true });
                      }}
                      onMouseLeave={() => {
                        this.setState({ paused: false });
                      }}
                    />
                  );
                })}
              </Swipe>

              <div className="absolute w-full flex justify-center bottom-0">
                {CarouselData.map((element, index) => {
                  return (
                    <div
                      className={
                        index === this.state.currentSlide
                          ? "h-1 w-10 bg-aboutOrange rounded-full mx-2   "
                          : "h-1 w-10 bg-white rounded-full mx-2   "
                      }
                      key={index}
                      onClick={() => {
                        this.setCurrentSlide(index);
                      }}
                    ></div>
                  );
                })}
              </div>

              <AiOutlineRight
                onClick={this.nextSlide}
                className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
              />
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default Carousel;
