import {  Instagram, } from "@mui/icons-material";

import calendarIcon from "../assets/ServicesIcons/calendarIcon.png"
import giftIcon from "../assets/ServicesIcons/giftIcon.png"
import returnIcon from "../assets/ServicesIcons/returnIcon.png"
import shoppingIcon from "../assets/ServicesIcons/shoppingIcon.png"

import CollectionsImage1 from "../assets/Collections/CollectionsImage1.png"
import CollectionsImage2 from "../assets/Collections/CollectionsImage2.png"

import HomeBannerImage1 from "../assets/HomeBanner.png"
import HomeBannerBgImage2 from "../assets/HomeBannerBackground2.png"
import HomeBannerImage2 from "../assets/HomeBanner2.png"

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


import bedRoomCategory from "../images/Home/bedRoom.jpg";
import bathRoomCategory from "../images/Home/Bathroom.jpg";
import kitchenRoomCategory from "../images/Home/kitchen.jpg";
import livingRoomCategory from "../images/Home/living-room.jpg"


import bestseller1 from "../images/BestSeller/bathtextile.webp";
import bestseller2 from "../images/BestSeller/bedtextile.webp";
import bestseller3 from "../images/BestSeller/curtains.webp";
import bestseller4 from "../images/BestSeller/ironing_board_Cover.webp";
import bestseller5 from "../images/BestSeller/girl_cloth.jpeg";
import bestseller6 from "../images/BestSeller/sofacovers.jpeg"
import bestseller7 from "../images/BestSeller/tablecloths.jpeg";

import Slide1 from "../images/Home/Slide1.jpg";
import Slide2 from "../images/Home/Slide2.jpg";
import Slide3 from "../images/Home/Slide3.jpg";


import bathroom from "../images/Category/bathrobe.webp";
import blankets from "../images/Category/blankets.jpeg";
import carpet from "../images/Category/carpet.jpeg";
import chairPads from "../images/Category/chairPads.avif";
import cover from "../images/Category/cover.webp";

const homeData = {
    CarouselSection:[
        {
            title:"NEW COLLECTIONS",
            description:"Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit. ",
            image:Slide2,
            button:"SHOP COLLECTION",
            link:"/",
            backgroundRadialGradient:[
                "#EFBB92",
                "#F0A76F"
            ]
        },  {
            title:"NEW COLLECTIONS",
            description:"Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit. ",
            image:Slide3,
            button:"SHOP COLLECTION",
            link:"/",
            backgroundRadialGradient:[
                "#E1E5E4",
                "#C3C2BA"
            ]
        },  {
            title:"NEW COLLECTIONS",
            description:"Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit. ",
            image:Slide1,
            button:"SHOP COLLECTION",
            link:"/",
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
        bedRoom:{
            image:bedRoomCategory,
            button:"BED ROOM TEXTILES",
            link:"/clothing"
        },
        bathRoom:{
            image:bathRoomCategory,
            button:"BATH ROOM TEXTILES",
            link:"/homeTextiles"
        },
        kitchenRoom:{
            image:kitchenRoomCategory,
            button:"kITCHEN & DINING TEXTILES",
            link:"/officeSupplies"
        },
        livingRoom:{
            image:livingRoomCategory,
            button:"LIVING ROOM TEXTILES",
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
                link:"/"
            },{
                image:CollectionsImage2,
                title:"Unique Collections",
                description:"Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus sit libero. Ultricies quam nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo mollis diam sed facilisis at cursus imperdiet cursus ac faucibus sit faucibus sit libero.",
                button:"SHOP COLLECTION",
                link:"/"
            },{
                image:CollectionsImage1,
                title:"Classic winter collection",
                description:"Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus sit libero. Ultricies quam nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo mollis diam sed facilisis at cursus imperdiet cursus ac faucibus sit faucibus sit libero.",
                button:"SHOP COLLECTION",
                link:"/"
            },
        ]

    },
    BestSellingItemsSection:{
        title:"BEST SELLING ITEMS",
        button:"VIEW ALL CATEGORIES",
        link:"/shop",
        products:[
            {
                product_id:"1",
                image:bestseller1,
                name:"Bath textile",
                price:"950.00"
            },{
                product_id:"2",
                image:bestseller2,
                name:"Bed textile",
                price:"1200.00"
            },{
                product_id:"3",
                image:bestseller3,
                name:"Curtains",
                price:"580.00"
            },{
                product_id:"4",
                image:bestseller4,
                name:"Ironing board cover",
                price:"120.00"
            },{
                product_id:"5",
                image:bestseller5,
                name:"Kids clothing",
                price:"700.00"
            },{
                product_id:"6",
                image:bestseller6,
                name:"Sofa cover",
                price:"690.00"
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
        link:"/"
    },
    YouMayAlsoLikeSection:{
        title:"YOU MAY ALSO LIKE",
        button:"VIEW ALL PRODUCTS",
        link:"/product",
        products:[
            {
                product_id:"1",
                image:bathroom,
                name:"Bathrobe",
                price:"950.00"
            },{
                product_id:"2",
                image:blankets,
                name:"Blankets",
                price:"1050.00"
            },{
                product_id:"3",
                image:carpet,
                name:"carpet",
                price:"850.00"
            },{
                product_id:"4",
                image:cover,
                name:"Rugs",
                price:"690.00"
            },
        ]
    },
    ReadBlogPostsSection:{
        title:"READ BLOG POSTS",
        button:"READ ALL BLOG POSTS",
        link:"/",
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
    FollowUs:{
        title:"FOLLOW US",
        data:[
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
}

export {homeData};