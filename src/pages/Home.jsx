import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { homeData } from '../data/HomeData';
import { Link } from 'react-router-dom';
import carouselFlower from '../assets/carouselFlower.png';
import PlayButton from '../assets/PlayButton.png';

import ProductSlider from '../components/ProductSlider';
import TestimonialCarousel from '../components/TestimonialCarousel';

import Marquee from "react-fast-marquee";

const { CarouselSection, ServiceSection, CategorySection, CollectionSection, BestSellingItemsSection, HomeBanner1, TestimonialSection, HomeBanner2, YouMayAlsoLikeSection, ReadBlogPostsSection, MarqueeLogosSection, FollowUs } = homeData;

const ActiveDotSVG = ({ rotation }) => (
    <svg className="active-dot" width="10" height="29" viewBox="0 0 10 29" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotate(${rotation}deg)` }}>
        <rect className="dot-rect" y="29" width="28.1818" height="10" rx="5" transform="rotate(-90 0 29)" fill="#17183B" />
    </svg>
);

const InactiveDotSVG = ({ rotation }) => (
    <svg className="inactive-dot" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotate(${rotation}deg)` }}>
        <rect className="dot-rect" y="10.8184" width="10" height="10" rx="5" transform="rotate(-90 0 10.8184)" fill="white" />
    </svg>
);

const useStyles = makeStyles(() => ({
    indicatorContainer: {
        position: 'absolute',
        top: '50%',
        right: '5%',
        transform: 'translate(-50%,-50%)',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3px',
    },
    carouselContainer: {
        position: 'relative',
        overflow: 'hidden',
    },
    pngContainer: {
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        transform: 'translate(50%,50%) rotate(0deg)',
        zIndex: 1,
        transition: 'transform 0.5s ease',
    },
}));

const CustomDot = ({ active, rotation }) => {
    return active ? <ActiveDotSVG rotation={rotation} /> : <InactiveDotSVG rotation={rotation} />;
};

const Home = () => {
    const classes = useStyles();
    const [activeIndex, setActiveIndex] = useState(0);
    const [rotation, setRotation] = useState(0);

    const handleChange = (index) => {
        setActiveIndex(index);
        setRotation(rotation - 180);
    };

    return (
        <>
            <div className={classes.carouselContainer} style={{ background: "var(--accent-color)" }}>
                <Carousel
                    animation="fade"
                    className='p-4'
                    indicators={false}
                    navButtonsAlwaysInvisible
                    onChange={(index) => handleChange(index)}
                >
                    {CarouselSection.map((item, index) => (
                        <Paper
                            key={`carousel_${index}`}
                            className='position-relative row'
                            style={{
                                background: `radial-gradient(circle, ${item.backgroundRadialGradient.join(', ')})`,
                                height: "100%",
                                minHeight: "500px"
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="col-md-6 object-fit-cover m-0 p-0"
                                width="100%"
                            />
                            <div className="col-md-6 d-flex flex-column justify-content-center gap-3 my-3 ps-5">
                                <h3 className='carousel-heading'>{item.title}</h3>
                                <p className='carousel-description w-50'>{item.description}</p>
                                <Link to={item.link}><button className='primary-btn'>{item.button}</button></Link>
                            </div>
                        </Paper>
                    ))}
                </Carousel>
                <div className={classes.indicatorContainer}>
                    {CarouselSection.map((item, index) => (
                        <CustomDot key={`dot_${index}`} active={index === activeIndex} rotation={rotation} />
                    ))}
                </div>
                <div className={classes.pngContainer} style={{ transform: `translate(50%, 50%) rotate(${rotation}deg)` }}>
                    <img src={carouselFlower} alt="Image" />
                </div>
            </div>
            <div className='container'>
                <h3 className='my-3'>{CategorySection.title}</h3>
                <div className='row g-2 d-flex align-items-center justify-content-center'>
                    <div className='col-12 col-sm-12 col-md-4 h-100'>
                        <div className='position-relative '>
                            <img src={CategorySection.bedRoom.image} alt={CategorySection.bedRoom.button} width="94%" />
                            <button className='secondary-btn category-button'>{CategorySection.bedRoom.button} </button>
                        </div>
                    </div>

                    <div className='col-12 col-sm-12 col-md-8 h-100'>
                        <div className='position-relative'>
                            <img src={CategorySection.kitchenRoom.image} alt={CategorySection.kitchenRoom.button} width="100%" />
                            <button className='secondary-btn category-button'>{CategorySection.kitchenRoom.button} </button>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 h-100'>
                        <div className='position-relative'>
                            <img src={CategorySection.livingRoom.image} alt={CategorySection.livingRoom.button} width="100%" />
                            <button className='secondary-btn category-button'>{CategorySection.livingRoom.button} </button>
                        </div>
                    </div>
                    <div className=' col-12 col-sm-12 col-md-6 h-100'>
                        <div className='position-relative'>
                            <img src={CategorySection.bathRoom.image} alt={CategorySection.bathRoom.button} width="100%" />
                            <button className='secondary-btn category-button'>{CategorySection.bathRoom.button} </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container my-5 '>
                <ProductSlider data={BestSellingItemsSection} />
            </div>

            <div className='container my-5'>
                <ProductSlider data={YouMayAlsoLikeSection} />
            </div>

        </>
    );
};

export default Home;
