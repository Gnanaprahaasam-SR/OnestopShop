import "../App.css";
import dhl from "../images/dhl.png";
import arcticon from "../images/arcticons_post.png";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import "../App.css";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <div className="footer container">
            <hr />
            <div className="row g-5">
                <div className=" col-12 col-sm-12 col-md-4 mb-2">
                    <div>
                        <h4 className="mb-2 highlight">RSP COTTON WORLD</h4>
                        <p className="para">Gravida massa volutpat aenean odio. Amet, turpis erat nullam fringilla elementum diam in. Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.</p>
                        <div className="d-flex gap-2 icon">
                            <FaFacebookF size={18} />
                            <BsInstagram size={18} />
                            <BiLogoLinkedin size={18} />
                            <FaTwitter size={18} />
                        </div>
                    </div>
                </div>
                {/* 
                <div className="col-md-2 col-sm-6 col-12 mb-2">
                    <h5 className="mb-2 highlight">QUICK LINKS</h5>
                    <p><Link className="shortLink" to="/">HOME</Link></p>
                    <p><Link className="shortLink" to="/about">ABOUT</Link></p>
                    <p><Link className="shortLink" to="/services">SERVICES</Link></p>
                    <p><Link className="shortLink" to="/contact">CONTACT</Link></p>
                </div> */}
                <div className=" col-12 col-sm-6  col-md-4 mb-2">
                    <div>
                        <h5 className="mb-2 highlight">HELP & INFO</h5>
                        <p>Terms and Conditions</p>
                        <p>Refund and Returns Policy</p>
                        <p>Shipping Policy</p>
                        <p>Privacy Policy</p>
                        <p>How to Order</p>
                    </div>
                </div>

                <div className=" col-12 col-sm-6 col-md-4 mb-2 ">
                    <div>
                        <h5 className="mb-2 highlight">CONTACT US</h5>
                        <p>kairafashionstore@oss.com</p>
                        <p>+43 98765 3212</p>
                    </div>
                </div>
            </div>

            <div className="justify-content-lg-between justify-content-md-center justify-content-sm-center text-center flex-wrap ">
                <p className="">We ship with: <img src={dhl} alt="dhl" /> <img src={arcticon} alt="arcticon" />  </p>
                <p className="">&#169; Copyright 2025 RSP Cotton | All rights reserved.</p>
            </div>
        </div>
    )
};

export default Footer;