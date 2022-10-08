import React from "react";
import StoreDetails from "./StoreDetails";
import SocialIcons from "./SocialIconsCom";
import Newsletter from "./NewsletterCom";
const Footer = () => {
    return (
        //  footer container
        <>
            <StoreDetails></StoreDetails>
            <Newsletter />
            {/* footer proper */}
            <div class="container-fluid footer p-4">

                <div class="row align-items-center py-5">
                    <div class="col-5">
                        <ul class="d-flex justify-content-evenly">
                            <li>Blog</li>
                            <li>FaQs</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    {/* social Icons */}
                    <SocialIcons />
                    <div class="text-center fw-bold py-5">
                        <p>Copyright 2022</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;