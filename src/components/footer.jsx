import "../App.css";
import paypal from "../images/paypal.png";
import visa from "../images/visa.png";
import dhl from "../images/dhl.png";
import arcticon from "../images/arcticons_post.png";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {

    return (
        <div className="footer container">
            <hr />
            <div className="row g-2">
                <div className="col-md-4 col-sm-12 mb-4">
                    <h4 className="mb-2">ONE STOP SHOP</h4>
                    <p>Gravida massa volutpat aenean odio. Amet, turpis erat nullam fringilla elementum diam in. Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.</p>
                    <div className="d-flex gap-2 icon">
                        <FaFacebookF size={18} />
                        <BsInstagram size={18} />
                        <BiLogoLinkedin size={18} />
                        <FaTwitter size={18} />
                    </div>
                </div>

                <div className="col-md-2 col-sm-6 mb-2">
                    <h5 className="mb-2">QUICK LINKS</h5>
                    <p>HOME</p>
                    <p>ABOUT</p>
                    <p>SERVICES</p>
                    <p>CONTACT</p>
                </div>
                <div className="col-md-3 col-sm-6 ">
                    <h5 className="mb-2">HELP & INFO</h5>
                    <p>TRACK YOUR ORDER</p>
                    <p>RETURNS +  EXCHANGES</p>
                    <p>SHIPPING +  DELIVERY</p>
                    <p>CONTACT US</p>
                    <p>FIND US EASY</p>
                    <p>FAQS</p>
                </div>

                <div className="col-md-3 col-sm-12 ">
                    <h5 className="mb-2">CONTACT US</h5>
                    <p>kairafashionstore@oss.com</p>
                    <p>+43 98765 3212</p>
                </div>
            </div>
            
            <div className="d-flex justify-content-lg-between justify-content-md-center justify-content-sm-center text-center flex-wrap footer_note">
                <p className="">We ship with: <img src={dhl} alt="dhl" /> <img src={arcticon} alt="arcticon" />   <span className="ms-3">Payment options: <img src={paypal} alt="paypal" /> <img src={visa} alt="visa" />
                </span></p>
                <p className="">&#169; Copyright 2024 One Stop Shop. All rights reserved.</p>
            </div>
        </div>
    )
};

export default Footer;