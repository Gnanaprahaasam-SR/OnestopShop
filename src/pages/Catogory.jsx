import React from 'react'
import { CategoryData } from '../data/CatogoryData'
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import WishListIcon from "../assets/WishListIcon.svg"
import ViewIcon from "../assets/ViewIcon.svg"

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

function Catogory() {
    const classes = useStyles();

    const { categoryKey } = useParams();
    const filteredCatorgory = CategoryData.find(Catogory => Catogory.categoryKey === categoryKey);
    console.log(filteredCatorgory)

    if (!filteredCatorgory) {
        return <div>No data found for the specified title.</div>;
      }

    return (
        <>
        <div className={classes.carouselContainer} style={{ background: "var(--accent-color)" }}>
            <div className='p-3 position-relative'>
            <img src={filteredCatorgory.backgroundImage} alt={filteredCatorgory.title} width="100%" />
            <p className='catorgory-hero-title'>{filteredCatorgory.title}</p>
            </div>
        </div>
        <div className='container my-5'>
            <div className='row'>
            {filteredCatorgory.products.map((product) => (
                        <div key={product.product_id} className='col-lg-3 col-6 col-md-4 d-flex flex-column align-items-center p-4 product-card'>
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
                </div>
        </div>
        </>
    )
}

export default Catogory