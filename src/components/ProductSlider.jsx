import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import WishListIcon from "../assets/WishListIcon.svg"
import ViewIcon from "../assets/ViewIcon.svg"


function ProductSlider({ data }) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };

    const CustomLeftArrow = ({ onClick }) => {
        return (
            <button className="custom-left-arrow" onClick={onClick} style={{ backgroundColor: 'transparent', border: 'none', zIndex: '999', position: 'absolute', left: '-10px', top: '50%', transform: 'translateY(-50%)' }}>
                <ArrowBack />
            </button>
        );
    };

    const CustomRightArrow = ({ onClick }) => {
        return (
            <button className="custom-right-arrow" onClick={onClick} style={{ backgroundColor: 'transparent', border: 'none', zIndex: '999', position: 'absolute', right: '-10px', top: '50%', transform: 'translateY(-50%)' }}>
                <ArrowForward />
            </button>
        );
    };

    return (
        <>
            <div className='d-flex justify-content-between'>
                <h4>{data.title}</h4>
                <Link to={data.link}><button className='secondary-btn'>{data.button}</button></Link>
            </div>
            <div style={{ position: 'relative' }}>
                <Carousel
                    responsive={responsive}
                    swipeable={true}
                    autoPlaySpeed={3000}
                    infinite={true}
                    customLeftArrow={<CustomLeftArrow />} // Custom left arrow button
                    customRightArrow={<CustomRightArrow />} // Custom right arrow button
                >
                    {data?.products.map((product) => (
                        <div key={product.product_id} className='d-flex flex-column align-items-center p-4 product-card'>
                            {/* <Link className='text-decoration-none' to={`/product/${product.product_id}`}> */}
                                <div className='d-flex flex-column'>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        width="100%"
                                        height="100%"
                                    />
                                    <div className="product-btns ">
                                        <button className="secondary-btn">ADD TO CART</button>
                                        <button className="product-icon"><img src={WishListIcon} alt='WishListIcon'/></button>
                                        <button className="product-icon"><img src={ViewIcon} alt='ViewIcon'/></button>
                                    </div>

                                    <h5 className='product-title'>{product.name}</h5>
                                    <p className='product-price'>{product.price}</p>
                                </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default ProductSlider;
