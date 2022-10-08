import React from "react";

const SocialIcons = () => {
    return (
        <div className="col-5 ">
            <ul className="d-flex justify-content-evenly">
                <li><span className="display-6"><i className="fa-brands fa-facebook"></i></span></li>
                <li><span className="display-6">
                    <i className="fa-brands fa-twitter"></i>
                </span></li>
                <li><span className="display-6">
                    <i className="fa-brands fa-instagram"></i>
                </span></li>
                <li><span className="display-6">
                    <i className="fa-brands fa-skype"></i>
                </span></li>
                <li><span className="display-6">
                    <i className="fa-brands fa-pinterest"></i>
                </span></li>

            </ul>
        </div>
    );
}

export default SocialIcons;