import { AutorenewOutlined, CalendarToday, CardGiftcardOutlined, Category, Instagram, ShoppingBagOutlined } from "@mui/icons-material";
import CarouselImage1 from "../assets/carouselImage1.png"
import CarouselImage2 from "../assets/carouselImage2.png"
import CarouselImage3 from "../assets/carouselImage3.png"
import calendarIcon from "../assets/ServicesIcons/calendarIcon.png"
import giftIcon from "../assets/ServicesIcons/giftIcon.png"
import returnIcon from "../assets/ServicesIcons/returnIcon.png"
import shoppingIcon from "../assets/ServicesIcons/shoppingIcon.png"
import clothing from "../assets/Categories/clothing.png"
import homeTextiles from "../assets/Categories/homeTextiles.png"
import officeSupplies from "../assets/Categories/officeSupplies.png"
import toys from "../assets/Categories/toys.png"
import CollectionsImage1 from "../assets/Collections/CollectionsImage1.png"
import CollectionsImage2 from "../assets/Collections/CollectionsImage2.png"

import HomeBannerImage1 from "../assets/HomeBanner.png"
import HomeBannerBgImage2 from "../assets/HomeBannerBackground2.png"
import HomeBannerImage2 from "../assets/HomeBanner2.png"


import ProductImage5 from "../assets/YouMayAlsoLike/Product1.png"
import ProductImage6 from "../assets/YouMayAlsoLike/Product2.png"
import ProductImage7 from "../assets/YouMayAlsoLike/Product3.png"
import ProductImage8 from "../assets/YouMayAlsoLike/Product4.png"

import ProductImage1 from "../assets/BestSellingItems/Image1.png"
import ProductImage2 from "../assets/BestSellingItems/Image2.png"
import ProductImage3 from "../assets/BestSellingItems/Image3.png"
import ProductImage4 from "../assets/BestSellingItems/Image4.png"

import BlogImage1 from "../assets/Blogs/Image1.png"
import BlogImage2 from "../assets/Blogs/Image2.png"
import BlogImage3 from "../assets/Blogs/Image3.png"

import MarqueeLogo1 from "../assets/Logo/1.png"
import MarqueeLogo2 from "../assets/Logo/2.png"
import MarqueeLogo3 from "../assets/Logo/3.png"
import MarqueeLogo4 from "../assets/Logo/4.png"
import MarqueeLogo5 from "../assets/Logo/5.png"

import FollowUsImage1 from "../assets/FollowUs/1.png"
import FollowUsImage2 from "../assets/FollowUs/2.png"
import FollowUsImage3 from "../assets/FollowUs/3.png"
import FollowUsImage4 from "../assets/FollowUs/4.png"
import FollowUsImage5 from "../assets/FollowUs/5.png"
import FollowUsImage6 from "../assets/FollowUs/6.png"




const homeData = {
    CarouselSection:[
        {
            title:"NEW COLLECTIONS",
            description:"Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit. ",
            image:CarouselImage1,
            button:"SHOP COLLECTION",
            link:"/collections",
            backgroundRadialGradient:[
                "#EFBB92",
                "#F0A76F"
            ]
        },  {
            title:"NEW COLLECTIONS",
            description:"Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit. ",
            image:CarouselImage2,
            button:"SHOP COLLECTION",
            link:"/collections",
            backgroundRadialGradient:[
                "#E1E5E4",
                "#C3C2BA"
            ]
        },  {
            title:"NEW COLLECTIONS",
            description:"Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit. ",
            image:CarouselImage3,
            button:"SHOP COLLECTION",
            link:"/collections",
            backgroundRadialGradient:[
                "#C8B6A5",
                "#B9A793"
            ]
        },
    ],
    ServiceSection:[
        {
            icon:calendarIcon,
            title:"Available 24/7",
            description:"At imperdiet dui accumsam sit amet nulla risus"
        },
        {
            icon:shoppingIcon,
            title:"Shop Online",
            description:"At imperdiet dui accumsam sit amet nulla risus"
        },{
            icon:giftIcon,
            title:"Special Packaging",
            description:"At imperdiet dui accumsam sit amet nulla risus"
        },{
            icon:returnIcon,    
            title:"Free Global Returns",
            description:"At imperdiet dui accumsam sit amet nulla risus"
        },
    ],
    CategorySection:{
        title:"CATEGORIES",
        clothing:{
            image:clothing,
            button:"SHOP CLOTHING",
            link:"/clothing"
        },
        homeTextiles:{
            image:homeTextiles,
            button:"SHOP HOME TEXTILES",
            link:"/homeTextiles"
        },
        officeSupplies:{
            image:officeSupplies,
            button:"SHOP OFFICE SUPPLIES",
            link:"/officeSupplies"
        },
        toys:{
            image:toys,
            button:"SHOP TOYS",
            link:"/toys"
        }
    },
    CollectionSection:{
        title:"COLLECTION",
        collections:[
            {
                image:CollectionsImage1,
                title:"Classic winter collection",
                description:"Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus sit libero. Ultricies quam nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo mollis diam sed facilisis at cursus imperdiet cursus ac faucibus sit faucibus sit libero.",
                button:"SHOP COLLECTION",
                link:"/collections"
            },{
                image:CollectionsImage2,
                title:"Unique Collections",
                description:"Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus sit libero. Ultricies quam nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo mollis diam sed facilisis at cursus imperdiet cursus ac faucibus sit faucibus sit libero.",
                button:"SHOP COLLECTION",
                link:"/collections"
            },{
                image:CollectionsImage1,
                title:"Classic winter collection",
                description:"Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus sit libero. Ultricies quam nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo mollis diam sed facilisis at cursus imperdiet cursus ac faucibus sit faucibus sit libero.",
                button:"SHOP COLLECTION",
                link:"/collections"
            },
        ]

    },
    BestSellingItemsSection:{
        title:"BEST SELLING ITEMS",
        button:"VIEW ALL PRODUCTS",
        link:"/products",
        products:[
            {
                product_id:"1",
                image:ProductImage1,
                name:"Dark florish onepiece",
                price:"$95.00"
            },{
                product_id:"2",
                image:ProductImage2,
                name:"Oversize t shirt",
                price:"$95.00"
            },{
                product_id:"3",
                image:ProductImage3,
                name:"Skirt",
                price:"$58.00"
            },{
                product_id:"4",
                image:ProductImage4,
                name:"Baggy Jeans",
                price:"$69.00"
            },
        ]
    },
    HomeBanner1:{
        image:HomeBannerImage1,
        title:"CLASSIC COLLECTION 2024 - CLASSIC COLLECTION 2024 - "
    },
    TestimonialSection:[
        {
            title:"WE LOVE GOOD COMPLIMENT",
            review:"“Best fitted white denim shirt more white denim than expected flexible crazy soft.”",
            reviewerName:"Denim craze"
        },
        {
            title:"WE LOVE GOOD COMPLIMENT",
            review:"“More than expected crazy soft, flexible and best fitted white simple denim shirt.”",
            reviewerName:"Casual Way"
        },
        {
            title:"WE LOVE GOOD COMPLIMENT",
            review:"“Best fitted white denim shirt more white denim than expected flexible crazy soft.”",
            reviewerName:"Denim craze"
        },
    ],
    HomeBanner2:{
        backgroudimage:HomeBannerBgImage2,
        image:HomeBannerImage2,
        title:"BECOME A SELLER",
        description:"Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
        button:"JOIN US",
        link:"/joinus"
    },
    YouMayAlsoLikeSection:{
        title:"YOU MAY ALSO LIKE",
        button:"VIEW ALL PRODUCTS",
        link:"/products",
        products:[
            {
                product_id:"1",
                image:ProductImage5,
                name:"Dark florish onepiece",
                price:"$95.00"
            },{
                product_id:"2",
                image:ProductImage6,
                name:"Oversize t shirt",
                price:"$95.00"
            },{
                product_id:"3",
                image:ProductImage7,
                name:"Skirt",
                price:"$58.00"
            },{
                product_id:"4",
                image:ProductImage8,
                name:"Baggy Jeans",
                price:"$69.00"
            },
        ]
    },
    ReadBlogPostsSection:{
        title:"READ BLOG POSTS",
        button:"READ ALL BLOG POSTS",
        link:"/Blogs",
        blogs:[
            {
                image:BlogImage1,
                topic:"FASHION",
                data:"Jul 11,2024",
                title:"How to look outstanding in pastel",
                description:"Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla..."
            },
            {
                image:BlogImage2,
                topic:"FASHION",
                data:"Jul 11,2024",
                title:"Top 10 fashion trend for summer",
                description:"Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus..."
            }, {
                image:BlogImage3,
                topic:"FASHION",
                data:"Jul 11,2024",
                title:"Crazy fashion with unique moment",
                description:"Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus..."
            },

        ]
    },
    MarqueeLogosSection:[
        {
            image:MarqueeLogo1,
        },{
            image:MarqueeLogo2,
        },{
            image:MarqueeLogo3,
        },{
            image:MarqueeLogo4,
        },{
            image:MarqueeLogo5,
        },
    ],
    FollowUs:[
        {
            image:FollowUsImage1,
            icon:<Instagram/>,
            name:"VISIT INSTAGRAM"
        },{
            image:FollowUsImage2,
            icon:<Instagram/>,
            name:"VISIT INSTAGRAM"
        },{
            image:FollowUsImage3,
            icon:<Instagram/>,
            name:"VISIT INSTAGRAM"
        },{
            image:FollowUsImage4,
            icon:<Instagram/>,
            name:"VISIT INSTAGRAM"
        },{
            image:FollowUsImage5,
            icon:<Instagram/>,
            name:"VISIT INSTAGRAM"
        },{
            image:FollowUsImage6,
            icon:<Instagram/>,
            name:"VISIT INSTAGRAM"
        },
    ]

}

export {homeData};