import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import React from "react";
import Slider from "react-slick";
import product1 from "../images/common/similarProduct1.png";
import { BsFillHeartFill } from "react-icons/bs";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#E0E0E9", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#E0E0E8", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

const ProductCarousel = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="slider-container  d-none d-sm-block">
            <Slider {...settings}>

                <div className="productList_product position-relative p-2">
                    <div >
                        <img src={product1} alt="product" width="100%" />
                        <h6>Dark florish onepiece</h6>
                        <h6 className="list">$ 19.00</h6>
                    </div>
                    <div className=" d-flex ">
                        <button className="btn productList_btn " >Add Cart</button>
                        <span className=" productList_like "><BsFillHeartFill color="#ffffff" /></span>
                    </div>
                </div>
                <div className="productList_product position-relative p-2">
                    <div >
                        <img src={product1} alt="product" width="100%" />
                        <h6>Dark florish onepiece</h6>
                        <h6 className="list">$ 19.00</h6>
                    </div>
                    <div className=" d-flex ">
                        <button className="btn productList_btn " >Add Cart</button>
                        <span className=" productList_like "><BsFillHeartFill color="#ffffff" /></span>
                    </div>
                </div>
                <div className="productList_product position-relative p-2">
                    <div >
                        <img src={product1} alt="product" width="100%" />
                        <h6>Dark florish onepiece</h6>
                        <h6 className="list">$ 19.00</h6>
                    </div>
                    <div className=" d-flex ">
                        <button className="btn productList_btn " >Add to Cart</button>
                        <span className=" productList_like "><BsFillHeartFill color="#ffffff" /></span>
                    </div>
                </div>
                <div className="productList_product position-relative p-2">
                    <div >
                        <img src={product1} alt="product" width="100%" />
                        <h6>Dark florish onepiece</h6>
                        <h6 className="list">$ 19.00</h6>
                    </div>
                    <div className=" d-flex ">
                        <button className="btn productList_btn " >Add to Cart</button>
                        <span className=" productList_like "><BsFillHeartFill color="#ffffff" /></span>
                    </div>
                </div>
                
            </Slider>
        </div>
    );
}

export default ProductCarousel;
