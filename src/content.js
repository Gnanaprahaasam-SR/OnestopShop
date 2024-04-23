import t_shirt from "./images/common/bestSelling.png";
import product1 from "./images/common/similarProduct1.png";
import product2 from "./images/common/similarProduct2.png";
import product3 from "./images/common/similarProduct3.png";
import product4 from "./images/common/similarProduct4.png";
import { BsFillHeartFill } from "react-icons/bs";

const content = {
    description: {
        pageTitle: "Oversized Half Sleeve T- Shirts",
        product: {
            image: t_shirt,
            Type: "Men's Casual Outerwear",
            Availablity: 12,
            Title: "THALASI Oversized T-Shirt for Men",
            Coast: 95.00
        },
        material: "High-Quality Denim (100% cotton)",
        fit: "Classic Fit",
        color: ["black", "white", "yellow"],
        sizes: ["S", "M", "L", "XL"],
        shippingInformation: ["Standard shipping: 3-5 business days", "Express shipping options available at checkout"],
        features: ["Distressed detailing for a rugged look", "Button-up front closure with engraved metal buttons", "Two side pockets for added functionality", "Adjustable buttoned cuffs for a personalized fit", "Back waist tabs for customizable styling"],
    },
    similarProduct: {
        products: [
            {
                product_id: "1",
                image: product1,
                name: "Dark florish onepiece",
                price: "$95.00"
            },
            {
                product_id: "2",
                image: product2,
                name: "florish onepiece",
                price: "$95.00"
            },
            {
                product_id: "3",
                image: product3,
                name: "Skirt",
                price: "$58.00"
            },
            {
                product_id: "4",
                image: product4,
                name: "Baggy Jeans",
                price: "$69.00"
            }
        ],
    }
}

export default content;
