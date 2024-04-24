import React, { useEffect, useState } from 'react';
import { CategoryData } from '../data/CatogoryData';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import WishListIcon from "../assets/WishListIcon.svg";
import ViewIcon from "../assets/ViewIcon.svg";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



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

const Category = ({ title, backgroundImage, productsCategories }) => {
    const classes = useStyles();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [page, setPage] = useState(1);
    const productsPerPage = 16;

    useEffect(() => {
        const defaultCategory = Object.keys(productsCategories)[0];
        setSelectedCategory(defaultCategory);
    }, [productsCategories]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const indexOfLastProduct = page * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productsCategories[selectedCategory]?.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <>
            <div className={classes.carouselContainer} style={{ background: "var(--accent-color)" }}>
                <div className='p-3 position-relative'>
                    <img src={backgroundImage} alt={title} width="100%" />
                    <p className='category-hero-title'>{title}</p>
                </div>
            </div>
            
            <div className='container my-5'>
                <div className='col'>
                    <div className='row'>
                        {Object.keys(productsCategories).map(category => (
                            <div key={category} className='col-auto me-3'>
                                <h4 className={`${selectedCategory === category ? 'category-subtitles-active' : 'category-subtitles'}`}
                                    onClick={() => handleCategoryChange(category)}>
                                    {category.replace(/([A-Z])/g, ' $1').trim()}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='row'>
                    {currentProducts && currentProducts.map(product => (
                        <div key={product.product_id} className='col-md-4 col-lg-3 col-6 d-flex flex-column align-items-center p-4 product-card'>
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
                <div className='d-flex align-items-center justify-content-center'>
                <Stack spacing={2} justifyContent="center" mt={3}>
                    <Pagination
                        count={Math.ceil(productsCategories[selectedCategory]?.length / productsPerPage)}
                        page={page}
                        shape="rounded"
                        onChange={handleChangePage}
                        color="primary"
                    />
                </Stack>
                </div>
            </div>
        </>
    );
};




function CategoryPage() {
    const classes = useStyles();
    const { categoryKey } = useParams();
    const filteredCategory = CategoryData.find(category => category.categoryKey === categoryKey);

    if (!filteredCategory) {
        return <div>No data found for the specified title.</div>;
    }

    return (
        <Category
            title={filteredCategory.title}
            backgroundImage={filteredCategory.backgroundImage}
            productsCategories={filteredCategory.productsCategories}
        />
    );
}

export default CategoryPage;
