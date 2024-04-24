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
        zIndex: 1000,
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
        zIndex: 1000,
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
                                background: `radial-gradient(circle, ${item.backgroundRadialGradient.join(', ')})`
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="col-md-5"
                                width="100%"
                            />
                            <div className="col-md-7 d-flex flex-column justify-content-center gap-3 my-3">
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
                <div className='row my-5'>
                    {ServiceSection.map((service, index) => (
                        <div key={`service_${index}`} className="col-md-6 col-lg-3 ">
                            <div className='text-center home-services'>
                                <img src={service.icon} alt={service.title} className='py-2' />
                                <h4>{service.title}</h4>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='row my-4'>
                    <h3 className='my-3'>{CategorySection.title}</h3>
                    <div className='col-md-4 my-3'>
                        <div className='position-relative'>
                            <img src={CategorySection.clothing.image} alt={CategorySection.clothing.button} width="100%" height="530px" />
                            <button className='secondary-btn category-button'>{CategorySection.clothing.button} </button>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className='row'>
                            <div className='col-md-12 my-3'>
                                <div className='position-relative'>
                                    <img src={CategorySection.homeTextiles.image} alt={CategorySection.homeTextiles.button} width="100%" height="250px" />
                                    <button className='secondary-btn category-button'>{CategorySection.homeTextiles.button} </button>
                                </div>
                            </div>
                            <div className='col-md-6 col-6 my-3'>
                                <div className='position-relative'>
                                    <img src={CategorySection.officeSupplies.image} alt={CategorySection.officeSupplies.button} width="100%" height="250px" />
                                    <button className='secondary-btn category-button'>{CategorySection.officeSupplies.button} </button>
                                </div>
                            </div>
                            <div className='col-md-6 col-6 my-3'>
                                <div className='position-relative'>
                                    <img src={CategorySection.toys.image} alt={CategorySection.toys.button} width="100%" height="250px" />
                                    <button className='secondary-btn category-button'>{CategorySection.toys.button} </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ background: "var(--accent-color)" }}>
                <div className='container py-5'>
                    <div className="collection-container my-5">
                        <div className="collection-title">
                            <h1>{CollectionSection.title}</h1>
                        </div>
                        <div className='collection-carousel-container'>
                            <Carousel
                                animation="fade"
                                className=''
                                indicators={false}
                                navButtonsAlwaysInvisible
                                onChange={(index) => handleChange(index)}
                            >
                                {CollectionSection.collections.map((item, index) => (
                                    <Paper
                                        key={`collection_${index}`}
                                        className='position-relative row overflow-hidden'
                                        style={{ background: "var(--white-color)" }}
                                    >
                                        <div className='col-md-12 col-lg-6 position-relative overflow-hidden'>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                width="100%"
                                                height="100%"
                                            />
                                            <div className={classes.indicatorContainer}>
                                                {CollectionSection.collections.map((item, index) => (
                                                    <CustomDot key={`collection_dot_${index}`} active={index === activeIndex} rotation={rotation} />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center gap-3 p-5">
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                            <Link to={item.link}><button className='primary-btn-two'>{item.button}</button></Link>
                                        </div>
                                    </Paper>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <ProductSlider data={BestSellingItemsSection} />
            </div>
            <div className='container my-5 position-relative text-center' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={HomeBanner1.image} alt={HomeBanner1.title} width="100%" />
                <div className="play-container" >
                    <img src={PlayButton} className='play-arrow' alt='play button' />
                </div>
                <svg viewBox="0 0 300 300" width="300" height="300" className="svg-center">
                    <defs>
                        <path id="circle"
                            d="
                    M 150, 150
                    m -75, 0
                    a 75,75 0 1,1 150,0
                    a 75,75 0 1,1 -150,0"/>
                    </defs>
                    <text fontSize="16" fill="white">
                        <textPath xlinkHref="#circle">
                            &nbsp;{HomeBanner1.title}
                        </textPath>
                    </text>
                </svg>
            </div>
            <div className={classes.carouselContainer} style={{ background: "var(--accent-color)" }}>
                <TestimonialCarousel TestimonialSection={TestimonialSection} />
            </div>
            <div className='container homebanner2-container  position-relative my-5' >
                <img src={HomeBanner2.backgroudimage} alt={HomeBanner2.title} width="100%" height="100%" className="homebanner2-image" />
                <div className='homebanner2-row-overlay'>
                    <div className='row'>


                        <div className='col-md-5 col-12 my-3'>
                            <img src={HomeBanner2.image} alt={HomeBanner2.title} width="100%" />
                        </div>
                        <div className='col-md-7 my-3 d-flex flex-column justify-content-center gap-3 col-12'>
                            <h1 className='carousel-heading'>{HomeBanner2.title}</h1>
                            <h5 className='carousel-description w-75'>{HomeBanner2.description}</h5>
                            <Link to={HomeBanner2.link}><button className='secondary-btn'>{HomeBanner2.button}</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <ProductSlider data={YouMayAlsoLikeSection} />
            </div>
            <div className='container'>
                <div className='d-flex justify-content-between'>
                    <h4>{ReadBlogPostsSection.title}</h4>
                    <Link to={ReadBlogPostsSection.link}><button className='secondary-btn'>{ReadBlogPostsSection.button}</button></Link>
                </div>
                <div className="row my-3">
                    {ReadBlogPostsSection.blogs.map((blog, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="">
                                <img src={blog.image} className="card-img-top" alt={blog.title} />
                                <div className="">
                                    <p className="blog-topic">{blog.topic} / {blog.data}</p>
                                    <h5 className="blog-title">{blog.title}</h5>
                                    <p className="blog-description">{blog.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="marquee-container my-5">
                    <Marquee>
                        {MarqueeLogosSection.map((logo, index) => (
                            <div key={index} className='p-5'>
                                <img src={logo.image} alt={`Logo ${index + 1}`} />
                            </div>
                        ))}
                    </Marquee>
                </div>
                <div className="row my-5">
                    <h5 className='text-center'>{FollowUs?.title}</h5>
                    {FollowUs?.data?.map((item, index) => (
                        <div className="col-md-2 col-6 my-3" key={index}>
                            <div className="follow-us-container" >
                                <img src={item.image} alt={`Follow Us ${index + 1}`} className="img-fluid" />
                                <div className="follow-us-icon">
                                    <h6>{item.icon}</h6>
                                    <h6>{item.name}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </>
    );
};

export default Home;
